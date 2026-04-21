import { useMutation, useQueryClient } from "@tanstack/react-query"
import { editReview } from "../api/user-review.api"

export const useEditReview = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: editReview,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["review", "my"] })
    },
  })
}
