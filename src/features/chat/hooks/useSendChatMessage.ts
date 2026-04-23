import { useMutation } from "@tanstack/react-query"
import { sendChatMessage } from "../api/send-chat-message.api"

export const useSendChatMessage = () => {
  return useMutation({
    mutationFn: sendChatMessage,
  })
}
