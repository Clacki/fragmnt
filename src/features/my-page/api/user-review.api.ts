import { instance } from "@/shared/api/axios-instance"
import type { MockReviewItem } from "../mocks/review.mock"

export const getReviewList = async (): Promise<MockReviewItem[]> => {
  const { data } = await instance.get("/analyses/reviews/me/")
  return data
}

export const deleteReview = async (reviewId: number): Promise<void> => {
  await instance.delete(`/analyses/${reviewId}/review/`)
}

export const editReview = async ({
  reviewId,
  content,
}: {
  reviewId: number
  content: string
}): Promise<void> => {
  await instance.patch(`/analyses/${reviewId}/review/`, { content })
}
