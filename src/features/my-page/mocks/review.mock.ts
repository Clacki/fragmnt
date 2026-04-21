import type { ReviewCardProps } from "@/features/my-page/pages/sections/review-section/review-card/ReviewCard"
export type MockReviewItem = ReviewCardProps & {
  reviewId: number
}

export const mockReviewList: MockReviewItem[] = [
  {
    reviewId: 1,
    title: "Golden Amber",
    rating: 4,
    content: "따뜻하고 부드러운 향이라 데일리로 쓰기 좋아요.",
    date: "2026. 04. 12",
  },
  {
    reviewId: 2,
    title: "Rose Garden",
    rating: 5,
    content: "장미향이 과하지 않고 은은해서 너무 만족!",
    date: "2026. 04. 10",
  },
  {
    reviewId: 3,
    title: "Fresh Lemon",
    rating: 3,
    content: "상큼한데 지속력은 조금 아쉬워요.",
    date: "2026. 04. 08",
  },
]
