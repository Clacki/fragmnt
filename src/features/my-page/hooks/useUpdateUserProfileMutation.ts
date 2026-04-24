import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateMyProfile } from "../api/user.api"
import type { UpdateUserProfileRequest, UserProfile } from "../types"

export const useUpdateUserProfile = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (body: UpdateUserProfileRequest) => updateMyProfile(body),
    onSuccess: (updatedProfile) => {
      queryClient.setQueryData(
        ["my-page", "userProfile"],
        (prev: UserProfile | undefined) => {
          if (!prev) return prev

          return {
            ...prev,
            ...updatedProfile,
          }
        }
      )
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["my-page", "userProfile"],
      })
    },
  })
}
