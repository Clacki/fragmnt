import { instance } from "@/shared/api/axios-instance"

export type SendChatMessagePayload = {
  sessionId: number
  message: string
}

export type SendChatMessageResponse = {
  status: "success"
  data: {
    reply: string
    is_recommendation: boolean
    recommendation_id: number | null
    scent_id: number | null
    source_type: string
  }
}

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
