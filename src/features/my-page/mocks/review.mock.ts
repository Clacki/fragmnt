export type ReviewItem = {
  id: number
  type: string
  eng_name: string
  review: string
  rating: number
  created_at: string
}

export const mockReviewList: ReviewItem[] = [
  {
    id: 1,
    type: "keyword",
    eng_name: "Golden Amber",
    review: "따뜻하고 부드러운 향이라 데일리로 쓰기 좋아요.",
    rating: 4,
    created_at: "2026. 04. 12",
  },
]
