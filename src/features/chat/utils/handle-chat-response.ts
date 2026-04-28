import { getScentDetail } from "../api/scent-response-detail.api"
import type {
  ChatMessage,
  SendChatMessageResponse,
} from "../types/message.types"
import {
  createAssistantTextMessage,
  createRecommendationMessage,
} from "./create-chat-message"
import { toRecommendationCardData } from "./to-recommendation-card-data"

type HandleChatResponseParams = {
  responseData: SendChatMessageResponse["data"]
  baseId: number
}

export const handleChatResponse = async ({
  responseData,
  baseId,
}: HandleChatResponseParams): Promise<ChatMessage[]> => {
  const { reply, is_recommendation, recommendation_id, scent_id } = responseData

  const assistantTextMessage = createAssistantTextMessage({
    id: baseId + 2,
    text: reply,
  })

  if (!is_recommendation || scent_id === null || recommendation_id === null) {
    return [assistantTextMessage]
  }

  const scentResponse = await getScentDetail(scent_id)

  const recommendationCardData = {
    ...toRecommendationCardData(scentResponse.data),
    recommendationId: recommendation_id,
  }

  const recommendationMessage = createRecommendationMessage({
    id: baseId + 3,
    data: recommendationCardData,
  })

  return [assistantTextMessage, recommendationMessage]
}
