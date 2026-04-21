import type { ChatMessage } from "@/features/chat/types/message.types"
import MessageBubble from "../message-bubble/MessageBubble"
import RecommendationCard from "../recommendation-card/RecommendationCard"
import TypingBubble from "../typing-bubble/TypingBubble"

type ChatItemProps = {
  message: ChatMessage
}

const ChatItem = ({ message }: ChatItemProps) => {
  if (message.type === "text")
    return <MessageBubble role={message.role} text={message.text} />

  if (message.type === "typing") return <TypingBubble />

  return <RecommendationCard {...message.data} />
}

export default ChatItem
