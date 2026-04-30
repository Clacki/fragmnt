import { useQuery } from "@tanstack/react-query"
import { getReviewList } from "../api/user-review.api"
import type { AnalysisType } from "../types/user.type"

export const useReviewList = (type: AnalysisType) => {
  return useQuery({
    queryKey: ["reviewList", type],
    queryFn: () => getReviewList(type),
  })
}
