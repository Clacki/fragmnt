export type RetryChatRecommendationParams = {
  sessionId: number
}

export type RetryChatRecommendationResponse = {
  status: "success"
  data: {
    ai_comment: string
    recommendation_id: number
    scent_id: number
    retry_count: number
    source_type: "chatbot"
  }
}
