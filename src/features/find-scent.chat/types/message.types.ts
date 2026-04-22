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

export type ChatMessage =
  | {
      id: number
      role: MessageRole
      type: "text"
      text: string
    }
  | {
      id: number
      role: "assistant"
      type: "typing"
    }
  | {
      id: number
      role: "assistant"
      type: "recommendation"
      data: RecommendationCardData
    }
