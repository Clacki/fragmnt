import type {
  ChatMessage,
  RecommendationCardData,
} from "../types/message.types"

type CreateUserMessageParams = {
  id: number
  text: string
}

type CreateTypingMessageParams = {
  id: number
}

type CreateAssistantTextMessageParams = {
  id: number
  text: string
}

type CreateRecommendationMessageParams = {
  id: number
  data: RecommendationCardData
}

export const createUserMessage = ({
  id,
  text,
}: CreateUserMessageParams): ChatMessage => ({
  id,
  role: "user",
  type: "text",
  text,
})

export const createTypingMessage = ({
  id,
}: CreateTypingMessageParams): ChatMessage => ({
  id,
  role: "assistant",
  type: "typing",
})

export const createAssistantTextMessage = ({
  id,
  text,
}: CreateAssistantTextMessageParams): ChatMessage => ({
  id,
  role: "assistant",
  type: "text",
  text,
})

export const createRecommendationMessage = ({
  id,
  data,
}: CreateRecommendationMessageParams): ChatMessage => ({
  id,
  role: "assistant",
  type: "recommendation",
  data,
})
