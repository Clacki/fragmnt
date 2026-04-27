import { instance } from "@/shared/api/axios-instance"
import type {
  PostAnalysisUploadUrlRequest,
  PostAnalysisUploadUrlResponse,
} from "../types/analysis-upload-url.type"
import type {
  AnalyzeImageRequest,
  ImageAnalysisResult,
} from "../types/image-analysis.type"

export const postImageAnalysis = async ({ image_key }: AnalyzeImageRequest) => {
  const { data } = await instance.post<ImageAnalysisResult>("/analyses", {
    image_key,
  })

  return data
}

export const postAnalysisUploadUrl = async ({
  file_name,
}: PostAnalysisUploadUrlRequest) => {
  const { data } = await instance.post<PostAnalysisUploadUrlResponse>(
    "/analyses/upload-url",
    {
      file_name,
    }
  )

  return data
}

export const uploadImageToS3 = async ({
  presignedUrl,
  file,
}: {
  presignedUrl: string
  file: File
}) => {
  const response = await fetch(presignedUrl, {
    method: "PUT",
    headers: {
      "Content-Type": file.type,
    },
    body: file,
  })

  if (!response.ok) {
    throw new Error("이미지 업로드에 실패했습니다.")
  }

  return response
}
