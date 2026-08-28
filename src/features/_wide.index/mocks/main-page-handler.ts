import { mockApi } from "@/shared/mocks/mock-api"
import { mockDb } from "@/shared/mocks/mock-db"
import { http, HttpResponse } from "msw"
import type { ReviewInMain } from "../types/main.api.type"
import { MainReviewMock } from "./mock-data/main-review-mock"

const getRecentReviews = (): ReviewInMain[] => {
  const createdReviews = mockDb.reviews.map((review) => {
    const analysis = mockDb.analyses.get(review.id)
    const history = mockDb.histories.find(
      (item) => item.id === review.id && item.type === review.type
    )

    return {
      id: review.id,
      type: review.type,
      thumbnail_url:
        analysis?.recommended_scent.thumbnail_url ??
        history?.recommended_scent.thumbnail_url ??
        "/mock-images/green-pause.jpg",
      name: mockDb.profile.name,
      created_at: review.created_at,
      review: review.review,
    }
  })

  const createdReviewKeys = new Set(
    createdReviews.map((review) => `${review.type}:${review.id}`)
  )

  return [
    ...createdReviews,
    ...MainReviewMock.filter(
      (review) => !createdReviewKeys.has(`${review.type}:${review.id}`)
    ),
  ]
}

export const mainPageHandlers = [
  http.get(mockApi("/analyses/reviews/recent"), () => {
    return HttpResponse.json(getRecentReviews())
  }),
]
