import { plainInstance } from "@/shared/api/axios-instance"
import type { QueryClient } from "@tanstack/react-query"
import type { ReviewInMain } from "../types/main.api.type"

export const makeReviewsInMainQueryOptions = () => {
  return {
    queryKey: ["reviews-in-main"],
    queryFn: async () => {
      const response = await plainInstance.get<ReviewInMain[]>(
        "/analyses/reviews/recent"
      )
      return response.data
    },
  }
}

const mainLoaderFn = async (queryClient: QueryClient) => {
  const reviewsInMain = await queryClient.ensureQueryData(
    makeReviewsInMainQueryOptions()
  )
  return reviewsInMain
}

export default mainLoaderFn
