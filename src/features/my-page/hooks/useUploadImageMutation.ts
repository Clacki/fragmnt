import { useMutation, useQueryClient } from "@tanstack/react-query"
import {
  getProfileImagePresignedUrl,
  registerProfileImage,
  uploadImageToS3,
} from "../api/user-profile.api"

export const useUploadProfileImage = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (file: File) => {
      const { presigned_url, img_url } = await getProfileImagePresignedUrl({
        file_name: file.name,
      })

      await uploadImageToS3(presigned_url, file)

      return registerProfileImage({
        profile_image_url: img_url,
      })
    },

    onSuccess: (updatedProfile) => {
      queryClient.setQueryData(["my-page", "userProfile"], updatedProfile)

      queryClient.invalidateQueries({
        queryKey: ["my-page", "userProfile"],
      })
    },
  })
}
