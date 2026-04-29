import type { ChatMessage } from "@/features/chat/types/message.types"
import MessageBubble from "../message-bubble/MessageBubble"
import RecommendationCard from "../recommendation-card/RecommendationCard"
import TypingBubble from "../typing-bubble/TypingBubble"

type ChatItemProps = {
  message: ChatMessage
  onRetryRecommendation: () => void
  isRetrying: boolean
}

const ChatItem = ({
  message,
  onRetryRecommendation,
  isRetrying,
}: ChatItemProps) => {
  if (message.type === "text") {
    return <MessageBubble role={message.role} text={message.text} />
  }

  if (message.type === "typing") {
    return <TypingBubble />
  }

  return (
    <RecommendationCard
      {...message.data}
      onRetry={onRetryRecommendation}
      isRetrying={isRetrying}
    />
  )
}

export default ChatItem
