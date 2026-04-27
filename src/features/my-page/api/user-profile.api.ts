import { instance } from "@/shared/api/axios-instance"
import type { UserProfile } from "../types"

export type ProfileImagePresignedUrlRequest = {
  file_name: string
}

export type ProfileImagePresignedUrlResponse = {
  presigned_url: string
  img_url: string
  key: string
  resource_id: number
}

export type RegisterProfileImageRequest = {
  profile_image_url: string
}

export const getProfileImagePresignedUrl = async (
  body: ProfileImagePresignedUrlRequest
): Promise<ProfileImagePresignedUrlResponse> => {
  const { data } = await instance.put(
    "/accounts/me/profile-image/presigned-url",
    body
  )
  return data
}

export const registerProfileImage = async (
  body: RegisterProfileImageRequest
): Promise<UserProfile> => {
  const { data } = await instance.patch("/accounts/me/profile-image", body)
  return data
}

export const uploadImageToS3 = async (uploadUrl: string, file: File) => {
  const response = await fetch(uploadUrl, {
    method: "PUT",
    headers: {
      "Content-Type": file.type,
    },
    body: file,
  })

  if (!response.ok) {
    throw new Error("S3 이미지 업로드에 실패했습니다.")
  }
}
