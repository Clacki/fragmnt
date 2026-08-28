import { mockApi } from "@/shared/mocks/mock-api"
import { mockDb } from "@/shared/mocks/mock-db"
import { delay, http, HttpResponse } from "msw"

export const webSharedHandlers = [
  http.get(mockApi("/analyses/web-share/:shareId"), async ({ params }) => {
    await delay(500)

    const shareId = String(params.shareId)

    const sharedResult = mockDb.shares[shareId]

    if (!sharedResult) {
      return HttpResponse.json(
        { message: "공유된 향기 결과를 찾을 수 없습니다." },
        { status: 404 }
      )
    }

    return HttpResponse.json(sharedResult)
  }),
]
