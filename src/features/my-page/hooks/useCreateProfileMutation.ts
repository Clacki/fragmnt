import { instance } from "@/shared/api/axios-instance"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { uploadProfileImageFile } from "../api/user-profile.api"
import { base64ToFile } from "../utils/base64ToFile"
// import { Toast } from "@/shared/components" // 프로젝트 토스트 방식에 맞게 교체

export type CreateAiProfileImageResponse = {
  message: string
}

const createAiProfileImage =
  async (): Promise<CreateAiProfileImageResponse> => {
    const { data } =
      await instance.post<CreateAiProfileImageResponse>("/question/image")

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

    onError: (error) => {
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        console.log("추천 기록이 없어 AI 프로필 이미지를 생성할 수 없습니다.")
        // Toast.error("추천 기록이 없어 AI 프로필 이미지를 생성할 수 없어요.")
        return
      }

      console.error("AI 프로필 이미지 생성 실패:", error)
      // Toast.error("AI 프로필 이미지 생성 중 문제가 발생했어요.")
    },
  })
}
