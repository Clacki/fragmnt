import { http, HttpResponse } from "msw"

import { mockFavoriteScents } from "./favoriteScents.mock"
import { mockHistoryList } from "./history.mock"
import { mockUserProfile } from "./myPage.mock"
import { mockReviewList } from "./review.mock"

const BASE_URL = import.meta.env.VITE_BASE_URL

export const myPageHandlers = [
  http.get(`${BASE_URL}/accounts/me`, () => {
    return HttpResponse.json(mockUserProfile)
  }),

  http.get(`${BASE_URL}/accounts/favorite-scents`, () => {
    return HttpResponse.json(mockFavoriteScents)
  }),

  http.get(`${BASE_URL}/analyses/`, () => {
    return HttpResponse.json(mockHistoryList)
  }),

  http.get(`${BASE_URL}/analyses/reviews/me/`, () => {
    return HttpResponse.json(mockReviewList)
  }),

  http.delete(`${BASE_URL}/analyses/:reviewId/review/`, (req) => {
    const { reviewId } = req.params
    const index = mockReviewList.findIndex(
      (review) => review.reviewId === Number(reviewId)
    )
    if (index !== -1) {
      mockReviewList.splice(index, 1)
      return new HttpResponse(null, { status: 204 })
    } else {
      return new HttpResponse(null, { status: 204 })
    }
  }),

  // TODO: 실제 API 명세 보고 수정 필요, 수정 모달 띄우는 text area 구현 필요
  http.patch(
    `${BASE_URL}/analyses/:reviewId/review/`,
    async ({ request, params }) => {
      const { reviewId } = params as { reviewId: string }
      const { content } = (await request.json()) as { content: string }

      const review = mockReviewList.find(
        (review) => review.reviewId === Number(reviewId)
      )

      if (!review) {
        return new HttpResponse(null, { status: 404 })
      }

      review.content = content
      return new HttpResponse(null, { status: 204 })
    }
  ),
]
