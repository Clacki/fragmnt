import { useMutation } from "@tanstack/react-query"
import { postAnalysisUploadUrl } from "../api/image-analysis.api"

export const usePostAnalysisUploadUrl = () => {
  return useMutation({
    mutationFn: postAnalysisUploadUrl,
  })
}
