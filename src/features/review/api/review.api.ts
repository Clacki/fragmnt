import { instance } from "@/shared/api/axios-instance"

type ReviewType = "image" | "chatbot" | "keyword" | "survey"

type CreateReviewParams = {
  resultId: number
  rating: number
  review: string
  type: ReviewType
}

export const createReview = async ({
  resultId,
  rating,
  review,
  type,
}: CreateReviewParams): Promise<void> => {
  await instance.patch(
    `/analyses/reviews/${resultId}`,
    {
      rating,
      review,
    },
    {
      params: {
        type,
      },
    }
  )
}
