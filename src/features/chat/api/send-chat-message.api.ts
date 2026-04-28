import { instance } from "@/shared/api/axios-instance"
import type {
  SendChatMessagePayload,
  SendChatMessageResponse,
} from "../types/message.types"

export const sendChatMessage = async ({
  sessionId,
  message,
}: SendChatMessagePayload) => {
  const response = await instance.post<SendChatMessageResponse>(
    `/chatbot/sessions/${sessionId}/messages`,
    { message }
  )

  return response.data
}
