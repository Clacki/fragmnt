import { instance } from "@/shared/api/axios-instance"
import type { ResultResponse } from "@/shared/types"
import type { GetChatRecommendationResultRequest } from "../types/message.types"

export const getChatRecommendationResult = async ({
  sessionId,
  recommendationId,
}: GetChatRecommendationResultRequest) => {
  const { data } = await instance.get<ResultResponse>(
    `/chatbot/sessions/${sessionId}/recommendations/${recommendationId}`
  )

  return data.data
}
