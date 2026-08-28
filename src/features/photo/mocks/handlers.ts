import type { PostAnalysisUploadUrlResponse } from "@/features/photo/types/analysis-upload-url.type"
import { createAnalysisResultMock } from "@/features/result/mock/result-factory"
import { saveAnalysisResult } from "@/features/result/mock/result.store"
import { mockApi } from "@/shared/mocks/mock-api"
import { MAX_IMAGE_FILE_SIZE } from "@/shared/utils/validate-image-file"
import { delay, http, HttpResponse } from "msw"

type PostAnalysesRequest = {
  image_key?: string
  resource_id?: number
}

export const photoHandlers = [
  http.post(mockApi("/analyses/upload-url"), async ({ request }) => {
    await delay(500)

    const body = (await request.json()) as { file_name?: string }

    const fileName =
      typeof body.file_name === "string" ? body.file_name : "photo.jpg"

    const key = `mock-uploads/${Date.now()}-${fileName}`
    const response: PostAnalysisUploadUrlResponse = {
      presigned_url: mockApi(`/mock-s3-upload/${encodeURIComponent(key)}`),
      img_url: "/mock-images/green-pause.jpg",
      key,
      resource_id: Date.now(),
    }

    return HttpResponse.json(response)
  }),

  http.put(mockApi("/mock-s3-upload/:uploadKey"), async ({ request }) => {
    await delay(700)

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

    return new HttpResponse(null, { status: 200 })
  }),

  http.post(mockApi("/analyses"), async ({ request }) => {
    await delay(1200)

    const body = (await request.json()) as PostAnalysesRequest
    const imageKey = body.image_key

    if (typeof imageKey !== "string" || !imageKey) {
      return HttpResponse.json(
        { message: "이미지 업로드 정보가 올바르지 않습니다." },
        { status: 400 }
      )
    }

    const resultId = body.resource_id ?? Date.now()

    const result = createAnalysisResultMock({
      id: resultId,
      type: "image",
    })

    saveAnalysisResult(result)

    return HttpResponse.json(result, { status: 201 })
  }),
]
