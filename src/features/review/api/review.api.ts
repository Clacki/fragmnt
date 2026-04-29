import { instance } from "@/shared/api/axios-instance"

type CreateReviewParams = {
  resultId: number
  rating: number
  review: string
}

export const createReview = async ({
  resultId,
  rating,
  review,
}: CreateReviewParams): Promise<void> => {
  await instance.patch(`/question/results/${resultId}/review`, {
    rating,
    review,
  })
}
