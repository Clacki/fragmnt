import { useMutation } from "@tanstack/react-query"
import { postAnalysisUploadUrl } from "../api/presigned-url.api"

export const usePostAnalysisUploadUrl = () => {
  return useMutation({
    mutationFn: postAnalysisUploadUrl,
  })
}
