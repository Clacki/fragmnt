import { useQuery } from "@tanstack/react-query"
import { getReviewList } from "../api/user-review.api"
import type { ReviewItem } from "../types/review.type"

export const useReviewList = () => {
  return useQuery<ReviewItem[]>({
    queryKey: ["my-page", "reviewList"],
    queryFn: getReviewList,
  })
}
