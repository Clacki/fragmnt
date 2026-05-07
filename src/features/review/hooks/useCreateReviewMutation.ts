import { makeReviewsInMainQueryOptions } from "@/features/_wide.index/loader/main-loader"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createReview } from "../api/review.api"

export const useCreateReviewMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createReview,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["reviewList"],
      })

      queryClient.invalidateQueries({
        queryKey: makeReviewsInMainQueryOptions().queryKey,
      })
    },
  })
}
