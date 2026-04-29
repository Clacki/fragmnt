import { useQuery } from "@tanstack/react-query"
import { getAnalysisDetail } from "../api/analysis-deatil.api"

type ResultType = "image" | "survey" | "keyword" | "chatbot"

type UseAnalysisDetailQueryParams = {
  resultId: number
  type: ResultType
  enabled?: boolean
}

export const useAnalysisDetailQuery = ({
  resultId,
  type,
}: UseAnalysisDetailQueryParams) => {
  return useQuery({
    queryKey: ["analysis-detail", resultId, type],
    queryFn: () => getAnalysisDetail({ id: resultId, type }),
    enabled: Number.isFinite(resultId),
  })
}
