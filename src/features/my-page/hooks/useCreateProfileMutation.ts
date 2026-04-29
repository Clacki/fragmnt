import { instance } from "@/shared/api/axios-instance"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { uploadProfileImageFile } from "../api/user-profile.api"
import { base64ToFile } from "../utils/base64ToFile"
export type CreateAiProfileImageResponse = {
  message: string
}

const createAiProfileImage =
  async (): Promise<CreateAiProfileImageResponse> => {
    const { data } = await instance.post("/question/image")
    return data
  }

export const useCreateAiProfileImage = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async () => {
      const aiImage = await createAiProfileImage()

      const file = base64ToFile(aiImage.message, "ai-profile.jpeg")

      return uploadProfileImageFile(file)
    },

    onSuccess: (updatedProfile) => {
      queryClient.setQueryData(["my-page", "userProfile"], updatedProfile)

      queryClient.invalidateQueries({
        queryKey: ["my-page", "userProfile"],
      })
    },
  })
}
