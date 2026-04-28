import { useQuery } from "@tanstack/react-query"
import { getChatRecommendationResult } from "../api/chat-recommendation-result.api"

type UseChatRecommendationResultQueryParams = {
  sessionId: number
  recommendationId: number
  enabled?: boolean
}

export const useChatRecommendationResultQuery = ({
  sessionId,
  recommendationId,
  enabled = true,
}: UseChatRecommendationResultQueryParams) => {
  return useQuery({
    queryKey: ["chat-recommendation-result", sessionId, recommendationId],
    queryFn: () =>
      getChatRecommendationResult({
        sessionId,
        recommendationId,
      }),
    enabled,
  })
}
