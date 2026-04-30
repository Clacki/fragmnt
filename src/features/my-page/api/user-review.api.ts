import { instance } from "@/shared/api/axios-instance"
import type { ReviewItem } from "../types/review.type"
import type { AnalysisType } from "../types/user.type"

export const getReviewList = async (
  type: AnalysisType
): Promise<ReviewItem[]> => {
  const { data } = await instance.get("/analyses/reviews", {
    params: { type },
  })

  return data
}

export const deleteReview = async ({
  reviewId,
  type,
}: {
  reviewId: number
  type: string
}): Promise<void> => {
  await instance.delete(`/analyses/reviews/${reviewId}`, {
    params: { type },
  })
}

export const editReview = async ({
  reviewId,
  type,
  review,
}: {
  reviewId: number
  type: string
  review: string
}): Promise<void> => {
  await instance.patch(
    `/analyses/reviews/${reviewId}`,
    { review },
    {
      params: { type },
    }
  )
}
