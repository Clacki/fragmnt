import { useQuery } from "@tanstack/react-query"
import { getAnalysisDetail } from "../api/analysis-detail.api"
import type { ResultType } from "../types"

type UseAnalysisDetailQueryParams = {
  resultId: number
  type: ResultType
  enabled?: boolean
}

export const useAnalysisDetailQuery = ({
  resultId,
  type,
  enabled = true,
}: UseAnalysisDetailQueryParams) => {
  return useQuery({
    queryKey: ["analysis-detail", resultId, type],
    queryFn: () => getAnalysisDetail({ id: resultId, type }),
    enabled: enabled && Number.isFinite(resultId),
  })
}
