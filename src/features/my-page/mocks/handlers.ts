import { delay, http, HttpResponse } from "msw"

import { createAnalysisResultMock } from "@/features/result/mock/result-factory"
import { getAnalysisResult } from "@/features/result/mock/result.store"
import { mockFavoriteScents } from "./favoriteScents.mock"
import { mockHistoryList } from "./history.mock"
import { mockUserProfile } from "./myPage.mock"
import { mockReviewList } from "./review.mock"

const BASE_URL = import.meta.env.VITE_BASE_URL

type ProfileImagePresignedUrlRequest = {
  file_name?: string
}

type RegisterProfileImageRequest = {
  profile_image_url?: string
}

const MOCK_AI_PROFILE_IMAGE_URL = "/msw-image/mock-profile.jpg"

let uploadedProfileImageUrl = mockUserProfile.profile_image_url

const blobToBase64 = async (blob: Blob) => {
  const arrayBuffer = await blob.arrayBuffer()
  const bytes = new Uint8Array(arrayBuffer)

  let binary = ""

  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte)
  })

  return `data:${blob.type};base64,${window.btoa(binary)}`
}

export const myPageHandlers = [
  http.get(`${BASE_URL}/accounts/me/profile`, () => {
    return HttpResponse.json(mockUserProfile)
  }),

  http.patch(`${BASE_URL}/accounts/me/profile`, async ({ request }) => {
    await delay(500)

    const body = await request.json()

    Object.assign(mockUserProfile, body)

    return HttpResponse.json(mockUserProfile)
  }),

  http.put(
    `${BASE_URL}/accounts/me/profile-image/presigned-url`,
    async ({ request }) => {
      const body = (await request.json()) as ProfileImagePresignedUrlRequest

      return HttpResponse.json({
        presigned_url: `${BASE_URL}/mock-s3/profile-image`,
        img_url: `/mock-upload/${body.file_name ?? "profile-image.jpeg"}`,
        key: body.file_name ?? "profile-image.jpeg",
        resource_id: 1,
      })
    }
  ),

  http.put(`${BASE_URL}/mock-s3/profile-image`, async ({ request }) => {
    const blob = await request.blob()

    uploadedProfileImageUrl = URL.createObjectURL(blob)

    return new HttpResponse(null, {
      status: 200,
    })
  }),

  http.patch(`${BASE_URL}/accounts/me/profile-image`, async ({ request }) => {
    const body = (await request.json()) as RegisterProfileImageRequest

    mockUserProfile.profile_image_url =
      uploadedProfileImageUrl ||
      body.profile_image_url ||
      MOCK_AI_PROFILE_IMAGE_URL

    return HttpResponse.json(mockUserProfile)
  }),

  http.post(`${BASE_URL}/question/image`, async () => {
    await delay(1600)

    const response = await fetch(MOCK_AI_PROFILE_IMAGE_URL)
    const blob = await response.blob()
    const base64Image = await blobToBase64(blob)

    return HttpResponse.json({
      message: base64Image,
    })
  }),

  http.get(`${BASE_URL}/analyses/feedback`, () => {
    return HttpResponse.json(mockFavoriteScents)
  }),

  http.get(`${BASE_URL}/analyses/history`, () => {
    return HttpResponse.json(mockHistoryList)
  }),

  http.get(`${BASE_URL}/analyses/reviews`, () => {
    return HttpResponse.json(mockReviewList)
  }),

  http.delete(`${BASE_URL}/analyses/:reviewId/review`, (req) => {
    const { reviewId } = req.params

    const index = mockReviewList.findIndex(
      (review) => review.id === Number(reviewId)
    )

    if (index !== -1) {
      mockReviewList.splice(index, 1)
    }

    return new HttpResponse(null, {
      status: 204,
    })
  }),

  http.get(`${BASE_URL}/analyses/:analysisId`, ({ params }) => {
    const { analysisId } = params as { analysisId: string }
    const numericAnalysisId = Number(analysisId)

    if (Number.isNaN(numericAnalysisId)) {
      return HttpResponse.json(
        { message: "잘못된 추천 결과 ID입니다." },
        { status: 400 }
      )
    }

    const storedResult = getAnalysisResult(numericAnalysisId)

    if (storedResult) {
      return HttpResponse.json(storedResult)
    }

    const historyItem = mockHistoryList.find(
      (history) => history.id === numericAnalysisId
    )

    if (!historyItem) {
      return HttpResponse.json(
        { message: "추천 결과를 찾을 수 없습니다." },
        { status: 404 }
      )
    }

    return HttpResponse.json(
      createAnalysisResultMock({
        id: numericAnalysisId,
        type: historyItem.type,
      })
    )
  }),

  http.patch(
    `${BASE_URL}/analyses/:reviewId/review`,
    async ({ request, params }) => {
      const { reviewId } = params as { reviewId: string }
      const { content } = (await request.json()) as { content: string }

      const review = mockReviewList.find(
        (review) => review.id === Number(reviewId)
      )

      if (!review) {
        return new HttpResponse(null, {
          status: 404,
        })
      }

      review.review = content

      return new HttpResponse(null, {
        status: 204,
      })
    }
  ),
]
