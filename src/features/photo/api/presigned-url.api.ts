import { instance } from "@/shared/api/axios-instance"
import type {
  PostAnalysisUploadUrlRequest,
  PostAnalysisUploadUrlResponse,
} from "../types/mobile-photo-step.types"

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
