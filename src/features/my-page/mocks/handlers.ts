import { delay, http, HttpResponse } from "msw"

import {
  getAnalysisResult,
  saveAnalysisResult,
} from "@/features/result/mock/result.store"
import { mockApi } from "@/shared/mocks/mock-api"
import { mockDb, persistMockDb } from "@/shared/mocks/mock-db"
import { MAX_IMAGE_FILE_SIZE } from "@/shared/utils/validate-image-file"

type ProfileImagePresignedUrlRequest = {
  file_name?: string
}

type RegisterProfileImageRequest = {
  profile_image_url?: string
}

const MOCK_AI_PROFILE_IMAGE_URL = "/msw-image/mock-profile.jpg"

let uploadedProfileImageUrl = mockDb.profile.profile_image_url

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
  http.get(mockApi("/accounts/me/profile"), () => {
    return HttpResponse.json(mockDb.profile)
  }),

  http.patch(mockApi("/accounts/me/profile"), async ({ request }) => {
    await delay(500)

    const body = await request.json()

    Object.assign(mockDb.profile, body)
    persistMockDb()

    return HttpResponse.json(mockDb.profile)
  }),

  http.put(
    mockApi("/accounts/me/profile-image/presigned-url"),
    async ({ request }) => {
      const body = (await request.json()) as ProfileImagePresignedUrlRequest

      return HttpResponse.json({
        presigned_url: mockApi("/mock-s3/profile-image"),
        img_url: `/mock-upload/${body.file_name ?? "profile-image.jpeg"}`,
        key: body.file_name ?? "profile-image.jpeg",
        resource_id: 1,
      })
    }
  ),

  http.put(mockApi("/mock-s3/profile-image"), async ({ request }) => {
    const blob = await request.blob()

    if (!blob.type.startsWith("image/")) {
      return HttpResponse.json(
        { message: "지원하지 않는 이미지 형식입니다." },
        { status: 415 }
      )
    }

    if (blob.size > MAX_IMAGE_FILE_SIZE) {
      return HttpResponse.json(
        { message: "이미지는 2MB 이하로 업로드해주세요." },
        { status: 413 }
      )
    }

    uploadedProfileImageUrl = await blobToBase64(blob)

    return new HttpResponse(null, {
      status: 200,
    })
  }),

  http.patch(mockApi("/accounts/me/profile-image"), async ({ request }) => {
    const body = (await request.json()) as RegisterProfileImageRequest

    mockDb.profile.profile_image_url =
      uploadedProfileImageUrl ||
      body.profile_image_url ||
      MOCK_AI_PROFILE_IMAGE_URL
    persistMockDb()

    return HttpResponse.json(mockDb.profile)
  }),

  http.post(mockApi("/question/image"), async () => {
    await delay(1600)

    const response = await fetch(MOCK_AI_PROFILE_IMAGE_URL)
    const blob = await response.blob()
    const base64Image = await blobToBase64(blob)

    return HttpResponse.json({
      message: base64Image,
    })
  }),

  http.get(mockApi("/analyses/feedback"), () => {
    return HttpResponse.json(mockDb.favorites)
  }),

  http.get(mockApi("/analyses/history"), () => {
    return HttpResponse.json(mockDb.histories)
  }),

  http.get(mockApi("/analyses/reviews"), ({ request }) => {
    const type = new URL(request.url).searchParams.get("type")

    return HttpResponse.json(
      type
        ? mockDb.reviews.filter((review) => review.type === type)
        : mockDb.reviews
    )
  }),

  http.delete(mockApi("/analyses/reviews/:reviewId"), ({ params, request }) => {
    const { reviewId } = params
    const type = new URL(request.url).searchParams.get("type")

    const index = mockDb.reviews.findIndex(
      (review) =>
        review.id === Number(reviewId) && (!type || review.type === type)
    )

    if (index !== -1) {
      mockDb.reviews.splice(index, 1)
    }

    const numericReviewId = Number(reviewId)
    const storedResult = getAnalysisResult(numericReviewId)

    if (storedResult && (!type || storedResult.type === type)) {
      saveAnalysisResult({
        ...storedResult,
        review: null,
        rating: null,
      })
    }

    const historyItem = mockDb.histories.find(
      (item) => item.id === numericReviewId && (!type || item.type === type)
    )

    if (historyItem) {
      historyItem.review = null
      historyItem.rating = null
    }
    persistMockDb()

    return new HttpResponse(null, {
      status: 204,
    })
  }),

  http.patch(
    mockApi("/analyses/reviews/:reviewId"),
    async ({ request, params }) => {
      const { reviewId } = params as { reviewId: string }
      const numericReviewId = Number(reviewId)
      const type = new URL(request.url).searchParams.get("type")
      const { review, rating } = (await request.json()) as {
        review?: string
        rating?: number
      }

      if (!Number.isFinite(numericReviewId) || !type || review === undefined) {
        return HttpResponse.json(
          { message: "리뷰 요청 정보가 올바르지 않습니다." },
          { status: 400 }
        )
      }

      let reviewItem = mockDb.reviews.find(
        (item) => item.id === numericReviewId && item.type === type
      )

      if (reviewItem) {
        reviewItem.review = review
        reviewItem.rating = rating ?? reviewItem.rating
      } else {
        const storedResult = getAnalysisResult(numericReviewId)
        const historyItem = mockDb.histories.find(
          (item) => item.id === numericReviewId && item.type === type
        )

        if (!storedResult && !historyItem) {
          return HttpResponse.json(
            { message: "추천 결과를 찾을 수 없습니다." },
            { status: 404 }
          )
        }

        reviewItem = {
          id: numericReviewId,
          type,
          eng_name:
            storedResult?.recommended_scent.eng_name ??
            historyItem?.recommended_scent.eng_name ??
            "",
          review,
          rating: rating ?? 0,
          created_at: new Date().toISOString(),
        }
        mockDb.reviews.unshift(reviewItem)
      }

      const storedResult = getAnalysisResult(numericReviewId)

      if (storedResult && storedResult.type === type) {
        saveAnalysisResult({
          ...storedResult,
          review,
          rating: rating ?? storedResult.rating,
        })
      }

      const historyItem = mockDb.histories.find(
        (item) => item.id === numericReviewId && item.type === type
      )

      if (historyItem) {
        historyItem.review = review
        historyItem.rating = rating ?? historyItem.rating
      }
      persistMockDb()

      return HttpResponse.json({
        detail: "리뷰가 수정되었습니다.",
        review: reviewItem,
      })
    }
  ),
]
