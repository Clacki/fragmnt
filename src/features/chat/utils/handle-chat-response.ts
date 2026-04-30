import { getScentDetail } from "../api/scent-response-detail.api"
import type {
  ChatMessage,
  SendChatMessageResponse,
} from "../types/message.types"
import { createMessageId } from "./create-chat-id"
import {
  createAssistantTextMessage,
  createRecommendationMessage,
} from "./create-chat-message"

import { toRecommendationCardData } from "./to-recommendation-card-data"

type HandleChatResponseParams = {
  responseData: SendChatMessageResponse["data"]
}

export const handleChatResponse = async ({
  responseData,
}: HandleChatResponseParams): Promise<ChatMessage[]> => {
  const { ai_comment, is_recommendation, recommendation_id, scent_id } =
    responseData

  const assistantTextMessage = createAssistantTextMessage({
    id: createMessageId(),
    text: ai_comment,
  })

  if (!is_recommendation || scent_id == null || recommendation_id == null) {
    return [assistantTextMessage]
  }

  const scentResponse = await getScentDetail({
    scentId: scent_id,
  })

  const recommendationCardData = {
    ...toRecommendationCardData(scentResponse.data),
    recommendationId: recommendation_id,
  }

  const recommendationMessage = createRecommendationMessage({
    id: createMessageId(),
    data: recommendationCardData,
  })

  return [assistantTextMessage, recommendationMessage]
}
