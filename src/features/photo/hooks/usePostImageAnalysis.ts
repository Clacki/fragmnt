import { useMutation } from "@tanstack/react-query"
import { postImageAnalysis } from "../api/image-analysis.api"

export const usePostImageAnalysis = () => {
  return useMutation({
    mutationFn: postImageAnalysis,
  })
}
