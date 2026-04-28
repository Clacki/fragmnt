import {
  CenterContainer,
  Container,
  RoundBox,
  Vstack,
} from "@/shared/components"
import { useEffect, useState } from "react"
import { useCreateChatSession } from "../hooks/useCreateChatSession"
import { useSendChatMessage } from "../hooks/useSendChatMessage"
import { messages } from "../mocks/chat-mocks"
import type { ChatMessage } from "../types/message.types"
import {
  createAssistantTextMessage,
  createTypingMessage,
  createUserMessage,
} from "../utils/create-chat-message"
import { handleChatResponse } from "../utils/handle-chat-response"
import ChatHeader from "./chat-header/ChatHeader"
import ChatInput from "./chat-input/ChatInput"
import ChatList from "./chat-list/ChatList"

const ScentChat = () => {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(messages)
  const [sessionId, setSessionId] = useState<number | null>(null)

  const { mutateAsync: createSession } = useCreateChatSession()
  const { mutateAsync: sendMessageAsync } = useSendChatMessage()

  useEffect(() => {
    if (sessionId) {
      return
    }

    const initializeSession = async () => {
      try {
        const response = await createSession()
        setSessionId(response.data.id)
      } catch (error) {
        console.error(error)
      }
    }

    initializeSession()
  }, [createSession, sessionId])

  const handleSendMessage = async (text: string) => {
    const trimmedText = text.trim()

    if (!trimmedText || !sessionId) {
      return
    }

    const baseId = Date.now()

    const userMessage = createUserMessage({
      id: baseId,
      text: trimmedText,
    })

    const typingMessage = createTypingMessage({
      id: baseId + 1,
    })

    setChatMessages((prev) => [...prev, userMessage, typingMessage])
    try {
      const response = await sendMessageAsync({
        sessionId,
        message: trimmedText,
      })

      const assistantMessages = await handleChatResponse({
        responseData: response.data,
        baseId,
      })

      setChatMessages((prev) => [
        ...prev.filter((message) => message.id !== typingMessage.id),
        ...assistantMessages,
      ])
    } catch (error) {
      console.error(error)

      const errorMessage = createAssistantTextMessage({
        id: baseId + 2,
        text: "메시지 전송에 실패했어요. 잠시 후 다시 시도해주세요.",
      })

      setChatMessages((prev) => [
        ...prev.filter((message) => message.id !== typingMessage.id),
        errorMessage,
      ])
    }
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
