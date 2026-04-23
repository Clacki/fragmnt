import { plainInstance } from "@/shared/api/axios-instance"
import type { QueryClient } from "@tanstack/react-query"
import type { ReviewInMainDummy } from "../types/dummy.api.type"

export const makeReviewsInMainQueryOptions = () => {
  return {
    queryKey: ["reviews-in-main"],
    queryFn: async () => {
      const response = await plainInstance.get("/question/mood/results")
      return response.data as ReviewInMainDummy[]
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
