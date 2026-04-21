import {
  CenterContainer,
  Container,
  RoundBox,
  Vstack,
} from "@/shared/components"
import { useState } from "react"
import {
  mockAssistantText,
  mockRecommendation,
} from "../mocks/chat-assistant-mocks"
import { messages } from "../mocks/chat-mocks"
import type { ChatMessage } from "../types/message.types"
import ChatHeader from "./chat-header/ChatHeader"
import ChatInput from "./chat-input/ChatInput"
import ChatList from "./chat-list/ChatList"

const ScentChat = () => {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(messages)

  // TODO: 어시스턴트 자동응답은 추후 API 응답으로 교체
  const handleSendMessage = (text: string) => {
    const trimmedText = text.trim()

    if (!trimmedText) {
      return
    }

    const baseId = Date.now()

    const userMessage: ChatMessage = {
      id: baseId,
      role: "user",
      type: "text",
      text: trimmedText,
    }

    const typingMessage: ChatMessage = {
      id: baseId + 1,
      role: "assistant",
      type: "typing",
    }

    const assistantTextMessage: ChatMessage = {
      id: baseId + 2,
      role: "assistant",
      type: "text",
      text: mockAssistantText,
    }

    const assistantRecommendationMessage: ChatMessage = {
      id: baseId + 3,
      role: "assistant",
      type: "recommendation",
      data: mockRecommendation,
    }

    setChatMessages((prev) => [...prev, userMessage, typingMessage])

    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev.filter((message) => message.id !== typingMessage.id),
        assistantTextMessage,
      ])
    }, 1000)

    setTimeout(() => {
      setChatMessages((prev) => [...prev, assistantRecommendationMessage])
    }, 2000)
  }

  return (
    <Container>
      <CenterContainer className="p-16">
        <RoundBox
          className="h-160 w-full border border-border bg-white shadow-2xl"
          padding="none"
        >
          <Vstack gap="none" className="h-full">
            <ChatHeader />
            <ChatList messages={chatMessages} />
            <ChatInput onSendMessage={handleSendMessage} />
          </Vstack>
        </RoundBox>
      </CenterContainer>
    </Container>
  )
}

export default ScentChat
