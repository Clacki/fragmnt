import { mockApi } from "@/shared/mocks/mock-api"
import { mockDb, persistMockDb } from "@/shared/mocks/mock-db"
import type { AnalysisResult, ResultType } from "@/shared/types"
import { delay, http, HttpResponse } from "msw"
import { createAnalysisResultMock } from "./result-factory"
import { getAnalysisResult, saveAnalysisResult } from "./result.store"

type SaveAnalysisFeedbackRequest = {
  status?: boolean
}

type PostWebShareRequest = {
  result_id?: number
  type?: ResultType
}

const getHistoryResult = (resultId: number, type: ResultType) => {
  return mockDb.histories.find(
    (item) => item.id === resultId && item.type === type
  )
}

const createFallbackResult = ({
  id,
  type,
}: {
  id: number
  type: ResultType
}): AnalysisResult => {
  switch (type) {
    case "image":
      return createAnalysisResultMock({
        id,
        type: "image",
      })

    case "chatbot":
      return createAnalysisResultMock({
        id,
        type: "chatbot",
      })

    case "keyword":
      return createAnalysisResultMock({
        id,
        type: "keyword",
      })

    case "survey":
      return createAnalysisResultMock({
        id,
        type: "survey",
      })
  }
}

export const resultHandlers = [
  http.get(mockApi("/analyses/history/:resultId"), ({ params, request }) => {
    const resultId = Number(params.resultId)

    const url = new URL(request.url)
    const type = url.searchParams.get("type") as ResultType | null

    if (!type) {
      return HttpResponse.json(
        { message: "분석 타입이 없습니다." },
        { status: 400 }
      )
    }

    const storedResult = getAnalysisResult(resultId)

    if (storedResult && storedResult.type === type) {
      return HttpResponse.json(storedResult)
    }

    const historyItem = getHistoryResult(resultId, type)

    if (historyItem) {
      const historyResult = createFallbackResult({
        id: resultId,
        type: historyItem.type,
      })

      saveAnalysisResult(historyResult)

      return HttpResponse.json(historyResult)
    }

    return HttpResponse.json(
      { message: "추천 결과를 찾을 수 없습니다." },
      { status: 404 }
    )
  }),

  http.patch(
    mockApi("/analyses/feedback/:resultId"),
    async ({ params, request }) => {
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

      const storedResult = getAnalysisResult(resultId)

      if (!storedResult || storedResult.type !== type) {
        return HttpResponse.json(
          { message: "추천 결과를 찾을 수 없습니다." },
          { status: 404 }
        )
      }

      saveAnalysisResult({
        ...storedResult,
        is_saved: body.status,
      })

      const favoriteIndex = mockDb.favorites.findIndex(
        (item) => item.id === resultId && item.type === type
      )

      if (body.status && favoriteIndex === -1) {
        mockDb.favorites.unshift({
          id: resultId,
          type,
          created_at: new Date().toISOString(),
          scent: storedResult.recommended_scent,
        })
      } else if (!body.status && favoriteIndex !== -1) {
        mockDb.favorites.splice(favoriteIndex, 1)
      }
      persistMockDb()

      return HttpResponse.json({
        status: "success",
        message: body.status
          ? "추천 결과가 저장되었습니다."
          : "추천 결과 저장이 취소되었습니다.",
      })
    }
  ),

  http.post(mockApi("/analyses/web-share"), async ({ request }) => {
    await delay(500)

    const body = (await request.json()) as PostWebShareRequest

    if (!body.result_id || !body.type) {
      return HttpResponse.json(
        { message: "공유 링크 생성에 필요한 값이 없습니다." },
        { status: 400 }
      )
    }

    const result = getAnalysisResult(body.result_id)

    if (!result || result.type !== body.type) {
      return HttpResponse.json(
        { message: "추천 결과를 찾을 수 없습니다." },
        { status: 404 }
      )
    }

    const shareId = `mock-share-${body.type}-${body.result_id}`
    mockDb.shares[shareId] = {
      id: result.id,
      recommended_scent: {
        name: result.recommended_scent.name,
        eng_name: result.recommended_scent.eng_name,
        description: result.recommended_scent.description,
        tags: result.recommended_scent.tags,
        profile: result.recommended_scent.profile,
        scent_notes: result.recommended_scent.scent_notes,
        thumbnail_url: result.recommended_scent.thumbnail_url,
      },
      created_at: result.created_at,
      ai_comment: result.ai_comment,
      match_score: result.match_score,
    }
    persistMockDb()

    return HttpResponse.json({
      share_id: shareId,
      og_crawler: `https://fragmnt-space.vercel.app/share/${shareId}`,
    })
  }),
]
