import { mockHistoryList } from "@/features/my-page/mocks/history.mock"
import type { ResultType } from "@/shared/types"
import { delay, http, HttpResponse } from "msw"
import { analysisResultStore } from "./result.store"

type SaveAnalysisFeedbackRequest = {
  status?: boolean
}
type PostWebShareRequest = {
  result_id?: number
  type?: ResultType
}
const getHistoryResult = (resultId: number, type: ResultType) => {
  return mockHistoryList.find(
    (item) => item.id === resultId && item.type === type
  )
}

export const resultHandlers = [
  http.get("*/analyses/history/:resultId", ({ params, request }) => {
    const resultId = Number(params.resultId)

    const url = new URL(request.url)
    const type = url.searchParams.get("type") as ResultType | null

    if (!type) {
      return HttpResponse.json(
        { message: "분석 타입이 없습니다." },
        { status: 400 }
      )
    }

    const storedResult = analysisResultStore.get(resultId)

    if (storedResult && storedResult.type === type) {
      return HttpResponse.json(storedResult)
    }

    const historyResult = getHistoryResult(resultId, type)

    if (!historyResult) {
      return HttpResponse.json(
        { message: "분석 결과를 찾을 수 없습니다." },
        { status: 404 }
      )
    }

    return HttpResponse.json(historyResult)
  }),

  http.patch("*/analyses/feedback/:resultId", async ({ params, request }) => {
    await delay(500)

    const resultId = Number(params.resultId)

    const url = new URL(request.url)
    const type = url.searchParams.get("type") as ResultType | null

    const body = (await request.json()) as SaveAnalysisFeedbackRequest

    if (!type) {
      return HttpResponse.json(
        { message: "분석 타입이 없습니다." },
        { status: 400 }
      )
    }

    if (typeof body.status !== "boolean") {
      return HttpResponse.json(
        { message: "저장 상태가 올바르지 않습니다." },
        { status: 400 }
      )
    }

    const storedResult = analysisResultStore.get(resultId)

    if (storedResult && storedResult.type === type) {
      analysisResultStore.set(resultId, {
        ...storedResult,
        is_saved: body.status,
      })
    }

    return HttpResponse.json({
      status: "success",
      message: body.status
        ? "추천 결과가 저장되었습니다."
        : "추천 결과 저장이 취소되었습니다.",
    })
  }),

  http.post("*/analyses/web-share", async ({ request }) => {
    await delay(500)

    const body = (await request.json()) as PostWebShareRequest

    if (!body.result_id || !body.type) {
      return HttpResponse.json(
        { message: "공유 링크 생성에 필요한 값이 없습니다." },
        { status: 400 }
      )
    }

    const shareId = `mock-share-${body.type}-${body.result_id}`

    return HttpResponse.json({
      share_id: shareId,
      og_crawler: `https://fragmnt-space.vercel.app/share-og/${shareId}`,
    })
  }),
]
