import { useMutation, useQueryClient } from "@tanstack/react-query"
import { saveAnalysisFeedback } from "../api/analysis-feedback"
import type { AnalysisResult } from "../types"

export const useSaveAnalysisFeedbackMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: saveAnalysisFeedback,
    onSuccess: (_, variables) => {
      queryClient.setQueryData<AnalysisResult>(
        ["analysis-detail", variables.id, variables.type],
        (oldData) => {
          if (!oldData) return oldData

          return {
            ...oldData,
            is_saved: variables.status,
          }
        }
      )

      queryClient.invalidateQueries({
        queryKey: ["analysis-detail", variables.id, variables.type],
      })

      queryClient.invalidateQueries({
        queryKey: ["favoriteScents"],
      })
    },
  })
}
