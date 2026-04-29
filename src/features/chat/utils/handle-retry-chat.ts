import { getScentDetail } from "../api/scent-response-detail.api"
import type { ChatMessage } from "../types/message.types"
import type { RetryChatRecommendationResponse } from "../types/retry-chat.types"
import {
  createAssistantTextMessage,
  createRecommendationMessage,
} from "./create-chat-message"
import { toRecommendationCardData } from "./to-recommendation-card-data"

type HandleRetryChatResponseParams = {
  responseData: RetryChatRecommendationResponse["data"]
  baseId: number
}

export const handleRetryChatResponse = async ({
  responseData,
  baseId,
}: HandleRetryChatResponseParams): Promise<ChatMessage[]> => {
  const { reply, recommendation_id, scent_id } = responseData

  const assistantTextMessage = createAssistantTextMessage({
    id: baseId + 1,
    text: reply,
  })

  const scentResponse = await getScentDetail({
    scentId: scent_id,
  })

  const recommendationCardData = {
    ...toRecommendationCardData(scentResponse.data),
    recommendationId: recommendation_id,
  }

  const recommendationMessage = createRecommendationMessage({
    id: baseId + 2,
    data: recommendationCardData,
  })

  return [assistantTextMessage, recommendationMessage]
}
