import { makeReviewsInMainQueryOptions } from "@/features/_wide.index/loader/main-loader"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteReview } from "../api/user-review.api"

export const useDeleteReview = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteReview,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["reviewList"],
      })

      await queryClient.invalidateQueries({
        queryKey: makeReviewsInMainQueryOptions().queryKey,
      })
    },
  })
}
