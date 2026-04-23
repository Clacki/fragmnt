import { useMutation } from "@tanstack/react-query"
import { createChatSession } from "../api/create-chat-session.api"

export const useCreateChatSession = () => {
  return useMutation({
    mutationFn: createChatSession,
  })
}
