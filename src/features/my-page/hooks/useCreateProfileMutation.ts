import { instance } from "@/shared/api/axios-instance"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import type { UserProfile } from "../types"

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
    mutationFn: createAiProfileImage,

    onSuccess: (data) => {
      queryClient.setQueryData(
        ["my-page", "userProfile"],
        (prev: UserProfile | undefined) => {
          if (!prev) return prev

          return {
            ...prev,
            profile_image_url: data.message,
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
