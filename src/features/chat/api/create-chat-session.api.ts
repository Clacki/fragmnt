import { instance } from "@/shared/api/axios-instance"

export type CreateChatSessionResponse = {
  status: "success"
  data: {
    id: number
    status: string
    created_at: string
  }
}

export const createChatSession = async () => {
  const response =
    await instance.post<CreateChatSessionResponse>("/chatbot/sessions")

  return response.data
}
