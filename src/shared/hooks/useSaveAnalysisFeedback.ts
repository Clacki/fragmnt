import { useMutation } from "@tanstack/react-query"
import { saveAnalysisFeedback } from "../api/analysis-feedback"

export const useSaveAnalysisFeedbackMutation = () => {
  return useMutation({
    mutationFn: saveAnalysisFeedback,
  })
}
