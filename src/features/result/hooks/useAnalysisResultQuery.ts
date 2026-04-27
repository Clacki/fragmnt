import { useQuery } from "@tanstack/react-query"
import { getAnalysisResult } from "../api/anaylses-result.api"

export const useAnalysisResultQuery = (resultId: string) => {
  return useQuery({
    queryKey: ["analysis-result", resultId],
    queryFn: () => getAnalysisResult(resultId),
    enabled: !!resultId,
  })
}
