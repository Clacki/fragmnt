import { useQuery } from "@tanstack/react-query"
import { getReviewList } from "../api/user-review.api"
import type { MockReviewItem } from "../mocks/review.mock"

export const useReviewList = () => {
  return useQuery<MockReviewItem[]>({
    queryKey: ["my-page", "reviewList"],
    queryFn: getReviewList,
  })
}
