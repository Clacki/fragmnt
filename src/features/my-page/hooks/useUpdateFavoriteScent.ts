import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateFavoriteScent } from "../api/user.api"

export const useUpdateFavoriteScent = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: updateFavoriteScent,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["favoriteScents"],
      })

      queryClient.invalidateQueries({
        queryKey: ["analysis-detail"],
      })
    },
  })
}
