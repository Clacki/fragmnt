import { useEffect, useRef } from "react"
import type { ChatMessage } from "../../types/message.types"
import ChatItem from "./chat-item/ChatItem"

type ChatListProps = {
  messages: ChatMessage[]
  onRetryRecommendation: () => void
  isRetrying: boolean
}

const ChatList = ({
  messages,
  onRetryRecommendation,
  isRetrying,
}: ChatListProps) => {
  const scrollRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!scrollRef.current) {
      return
    }

    scrollRef.current.scrollTop = scrollRef.current.scrollHeight
  }, [messages])

  return (
    <section
      ref={scrollRef}
      className="flex min-h-0 flex-1 flex-col gap-md overflow-y-auto bg-surface-default p-lg [scrollbar-gutter:stable]"
    >
      {messages.map((message) => (
        <ChatItem
          key={message.id}
          message={message}
          onRetryRecommendation={onRetryRecommendation}
          isRetrying={isRetrying}
        />
      ))}
    </section>
  )
}

export default ChatList
