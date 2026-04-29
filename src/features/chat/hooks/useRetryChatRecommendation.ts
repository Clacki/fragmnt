import { useMutation } from "@tanstack/react-query"
import { retryChatRecommendation } from "../api/retry-chat-recommendation.api"

export const useRetryChatRecommendationMutation = () => {
  return useMutation({
    mutationFn: retryChatRecommendation,
  })
}
