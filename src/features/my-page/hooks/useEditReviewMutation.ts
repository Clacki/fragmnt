import { useMutation, useQueryClient } from "@tanstack/react-query"
import { editReview } from "../api/user-review.api"

export const useEditReviewMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: editReview,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["my-page", "reviewList"],
      })
    },
  })
}
