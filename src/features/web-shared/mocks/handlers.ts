import { delay, http, HttpResponse } from "msw"
import { greenPauseWebSharedResult } from "./web-shared.mock"

export const webSharedHandlers = [
  http.get("*/analyses/web-share/:shareId", async ({ params }) => {
    await delay(500)

    const shareId = String(params.shareId)

    if (!shareId) {
      return HttpResponse.json(
        { message: "공유 ID가 없습니다." },
        { status: 400 }
      )
    }

    return HttpResponse.json(greenPauseWebSharedResult)
  }),
]
