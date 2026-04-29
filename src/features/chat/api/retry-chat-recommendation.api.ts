import { instance } from "@/shared/api/axios-instance"
import type {
  RetryChatRecommendationParams,
  RetryChatRecommendationResponse,
} from "../types/retry-chat.types"

export const retryChatRecommendation = async ({
  sessionId,
}: RetryChatRecommendationParams) => {
  const { data } = await instance.post<RetryChatRecommendationResponse>(
    `/chatbot/sessions/${sessionId}/recommendations/retry`
  )

  return data
}
