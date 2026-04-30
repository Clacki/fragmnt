import { getScentDetail } from "../api/scent-response-detail.api"
import type { ChatMessage } from "../types/message.types"
import type { RetryChatRecommendationResponse } from "../types/retry-chat.types"
import { createMessageId } from "./create-chat-id"
import {
  createAssistantTextMessage,
  createRecommendationMessage,
} from "./create-chat-message"

import { toRecommendationCardData } from "./to-recommendation-card-data"

type HandleRetryChatResponseParams = {
  responseData: RetryChatRecommendationResponse["data"]
}

export const handleRetryChatResponse = async ({
  responseData,
}: HandleRetryChatResponseParams): Promise<ChatMessage[]> => {
  const { ai_comment, recommendation_id, scent_id } = responseData

  const assistantTextMessage = createAssistantTextMessage({
    id: createMessageId(),
    text: ai_comment,
  })

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
