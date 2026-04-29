import { useMutation, useQueryClient } from "@tanstack/react-query"
import { uploadProfileImageFile } from "../api/user-profile.api"

export const useUploadProfileImage = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: uploadProfileImageFile,

    onSuccess: (updatedProfile) => {
      queryClient.setQueryData(["my-page", "userProfile"], updatedProfile)

      queryClient.invalidateQueries({
        queryKey: ["my-page", "userProfile"],
      })
    },
  })
}
