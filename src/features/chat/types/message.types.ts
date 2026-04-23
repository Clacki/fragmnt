export type RecommendationCardData = {
  id: string
  imageSrc: string
  imageAlt: string
  name: string
  englishName: string
  description: string
  tags: string[]
}

export type MessageRole = "user" | "assistant"

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
