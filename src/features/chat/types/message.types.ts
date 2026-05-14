import type { ChatbotAnalysisResult } from "@/shared/types"

export type MessageRole = "user" | "assistant"

export type RecommendationCardData = {
  recommendationId: number
  imageSrc: string
  imageAlt: string
  name: string
  englishName: string
  description: string
  tags: string[]
}

export type TextMessage = {
  id: number
  role: MessageRole
  type: "text"
  text: string
}

export type TypingMessage = {
  id: number
  role: "assistant"
  type: "typing"
}

export type RecommendationMessage = {
  id: number
  role: "assistant"
  type: "recommendation"
  data: RecommendationCardData
}

export type ChatMessage = TextMessage | TypingMessage | RecommendationMessage

export type GetScentDetailResponse = {
  status: "success"
  data: {
    id: number
    name: string
    eng_name: string
    description: string
    tags: string[]
    thumbnail_url: string
  }
}

export type SendChatMessagePayload = {
  sessionId: number
  message: string
}

export type SendChatMessageResponse = {
  status: "success"
  data: {
    ai_comment: string
    is_recommendation: boolean
    recommendation_id: number | null
    scent_id: number | null
    source_type: "chat"
  }
}

export type GetChatRecommendationResultRequest = {
  sessionId: number
  recommendationId: number
}

export type ChatRecommendationResultResponse = {
  status: "success"
  data: ChatRecommendationResult
}

export type ChatRecommendationResult = ChatbotAnalysisResult
