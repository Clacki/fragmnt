import type { PostAnalysisUploadUrlResponse } from "@/features/photo/types/analysis-upload-url.type"
import { createAnalysisResultMock } from "@/features/result/mock/result-factory"
import { saveAnalysisResult } from "@/features/result/mock/result.store"
import { delay, http, HttpResponse } from "msw"

type PostAnalysesRequest = {
  image_key?: string
  resource_id?: number
}

export const photoHandlers = [
  http.post("*/analyses/upload-url", async ({ request }) => {
    await delay(500)

    const body = (await request.json()) as { file_name?: string }

    const fileName =
      typeof body.file_name === "string" ? body.file_name : "photo.jpg"

    const key = `mock-uploads/${Date.now()}-${fileName}`
    const origin = new URL(request.url).origin

    const response: PostAnalysisUploadUrlResponse = {
      presigned_url: `${origin}/mock-s3-upload/${encodeURIComponent(key)}`,
      img_url: `${origin}/mock-images/green-pause.jpg`,
      key,
      resource_id: Date.now(),
    }

    return HttpResponse.json(response)
  }),

  http.put("*/mock-s3-upload/:uploadKey", async () => {
    await delay(700)

    return new HttpResponse(null, { status: 200 })
  }),

  http.post("*/analyses", async ({ request }) => {
    await delay(1200)

    const body = (await request.json()) as PostAnalysesRequest
    const imageKey = body.image_key

    if (typeof imageKey !== "string" || !imageKey) {
      return HttpResponse.json(
        { message: "Invalid image_key" },
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
