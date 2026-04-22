import { useEffect, useRef } from "react"
import type { ChatMessage } from "../../types/message.types"
import MessageBubble from "./message-bubble/MessageBubble"
import RecommendationCard from "./recommendation-card/RecommendationCard"
import TypingBubble from "./typing-bubble/TypingBubble"

type ChatBubbleProps = {
  message: ChatMessage
}
const ChatBubble = ({ message }: ChatBubbleProps) => {
  if (message.type === "typing") {
    return <TypingBubble key={message.id} />
  }

  if (message.type === "text") {
    return (
      <MessageBubble key={message.id} role={message.role} text={message.text} />
    )
  }

  return <RecommendationCard key={message.id} {...message.data} />
}

type ChatListProps = {
  messages: ChatMessage[]
}
const ChatList = ({ messages }: ChatListProps) => {
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
        <ChatBubble message={message} />
      ))}
    </section>
  )
}

export default ChatList
