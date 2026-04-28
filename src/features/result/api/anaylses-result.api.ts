import type { ImageAnalysisResult } from "@/features/photo/types/image-analysis.type"
import { instance } from "@/shared/api/axios-instance"

export const getAnalysisResult = async (
  id: string
): Promise<ImageAnalysisResult> => {
  const { data } = await instance.get(`/analyses/${id}`)

  return data
}
