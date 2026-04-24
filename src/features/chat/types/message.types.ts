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

export type SendChatMessageResponse = {
  status: "success"
  data: {
    reply: string
    is_recommendation: boolean
    recommendation_id: number
    scent_id: number
    source_type: "chatbot"
  }
}

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
