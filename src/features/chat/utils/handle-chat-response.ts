// chat/utils/handle-chat-response.ts
import type { SendChatMessageResponse } from "../api/send-chat-message.api"
import type { ChatMessage } from "../types/message.types"
import { createAssistantTextMessage } from "./create-chat-message"

type HandleChatResponseParams = {
  responseData: SendChatMessageResponse["data"]
  baseId: number
}

export const handleChatResponse = ({
  responseData,
  baseId,
}: HandleChatResponseParams): ChatMessage[] => {
  const { reply, is_recommendation, recommendation_id, scent_id } = responseData

  // TODO : 결과추천 API 나오면 연결
  if (is_recommendation) {
    console.log("추천 도달", {
      recommendation_id,
      scent_id,
    })
  }

  return [
    createAssistantTextMessage({
      id: baseId + 2,
      text: reply,
    }),
  ]
}
