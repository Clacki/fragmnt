import {
  CenterContainer,
  Container,
  RoundBox,
  Vstack,
} from "@/shared/components"
import { useUserGuard } from "@/shared/hooks/useUserGuard"
import { useEffect, useState } from "react"
import { useCreateChatSession } from "../hooks/useCreateChatSession"
import { useRetryChatRecommendationMutation } from "../hooks/useRetryChatRecommendation"
import { useSendChatMessage } from "../hooks/useSendChatMessage"
import { messages } from "../mocks/chat-mocks"
import type { ChatMessage } from "../types/message.types"
import { createMessageId } from "../utils/create-chat-id"
import {
  createAssistantTextMessage,
  createTypingMessage,
  createUserMessage,
} from "../utils/create-chat-message"
import { handleChatResponse } from "../utils/handle-chat-response"
import { handleRetryChatResponse } from "../utils/handle-retry-chat"
import ChatHeader from "./chat-header/ChatHeader"
import ChatInput from "./chat-input/ChatInput"
import ChatList from "./chat-list/ChatList"

const ScentChat = () => {
  useUserGuard()
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(messages)
  const [sessionId, setSessionId] = useState<number | null>(null)
  const { mutateAsync: createSession } = useCreateChatSession()
  const { mutateAsync: sendMessageAsync, isPending: isSending } =
    useSendChatMessage()
  const { mutateAsync: retryChatRecommendation, isPending: isRetrying } =
    useRetryChatRecommendationMutation()
  const isChatInputDisabled = !sessionId || isSending || isRetrying
  useEffect(() => {
    if (sessionId) {
      return
    }

    const initializeSession = async () => {
      try {
        const response = await createSession()
        setSessionId(response.data.id)
      } catch {
        setChatMessages((prev) => [
          ...prev,
          createAssistantTextMessage({
            id: createMessageId(),
            text: "대화를 시작하지 못했어요. 잠시 후 다시 시도해주세요.",
          }),
        ])
      }
    }

    initializeSession()
  }, [createSession, sessionId])

  const handleSendMessage = async (text: string) => {
    const trimmedText = text.trim()

    if (!trimmedText || !sessionId) {
      return
    }

    const userMessage = createUserMessage({
      id: createMessageId(),
      text: trimmedText,
    })

    const typingMessage = createTypingMessage({
      id: createMessageId(),
    })

    setChatMessages((prev) => [...prev, userMessage, typingMessage])

    try {
      const response = await sendMessageAsync({
        sessionId,
        message: trimmedText,
      })

      const assistantMessages = await handleChatResponse({
        responseData: response.data,
      })

      setChatMessages((prev) => [
        ...prev.filter((message) => message.id !== typingMessage.id),
        ...assistantMessages,
      ])
    } catch {
      const errorMessage = createAssistantTextMessage({
        id: createMessageId(),
        text: "메시지 전송에 실패했어요. 잠시 후 다시 시도해주세요.",
      })

      setChatMessages((prev) => [
        ...prev.filter((message) => message.id !== typingMessage.id),
        errorMessage,
      ])
    }
  }

  const handleRetryRecommendation = async () => {
    if (!sessionId) {
      return
    }

    const typingMessage = createTypingMessage({
      id: createMessageId(),
    })

    setChatMessages((prev) => [...prev, typingMessage])

    try {
      const retryResponse = await retryChatRecommendation({
        sessionId,
      })

      const retryMessages = await handleRetryChatResponse({
        responseData: retryResponse.data,
      })

      setChatMessages((prev) => [
        ...prev.filter((message) => message.id !== typingMessage.id),
        ...retryMessages,
      ])
    } catch {
      const errorMessage = createAssistantTextMessage({
        id: createMessageId(),
        text: "다시 추천에 실패했어요. 잠시 후 다시 시도해주세요.",
      })

      setChatMessages((prev) => [
        ...prev.filter((message) => message.id !== typingMessage.id),
        errorMessage,
      ])
    }
  }

  return (
    <Container>
      <CenterContainer className="p-4 md:p-16">
        <RoundBox
          className="h-120 md:h-160 w-full border border-border bg-white shadow-2xl"
          padding="none"
        >
          <Vstack gap="none" className="h-full">
            <ChatHeader />
            <ChatList
              messages={chatMessages}
              onRetryRecommendation={handleRetryRecommendation}
              isRetrying={isRetrying}
            />
            <ChatInput
              disabled={isChatInputDisabled}
              onSendMessage={handleSendMessage}
            />
          </Vstack>
        </RoundBox>
      </CenterContainer>
    </Container>
  )
}

export default ScentChat
