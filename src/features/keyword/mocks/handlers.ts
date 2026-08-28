import { createAnalysisResultMock } from "@/features/result/mock/result-factory"
import { saveAnalysisResult } from "@/features/result/mock/result.store"
import { mockApi } from "@/shared/mocks/mock-api"
import { delay, http, HttpResponse } from "msw"
import type { PostKeywordResultRequest } from "../types/keyword-questions.types"
import { scentKeywordMockData } from "./scent-keyword-mock-data"

export const keywordHandlers = [
  http.get(mockApi("/question/keyword"), () => {
    return HttpResponse.json(scentKeywordMockData)
  }),
  http.post(mockApi("/question/keyword"), async ({ request }) => {
    const body = (await request.json()) as PostKeywordResultRequest

    if (!Array.isArray(body) || body.length === 0) {
      return HttpResponse.json(
        { message: "선택된 키워드가 없습니다." },
        { status: 400 }
      )
    }

    await delay(1500)

    const resultId = Date.now()

    const result = createAnalysisResultMock({
      id: resultId,
      type: "keyword",
      userInput: body.map((keyword) => {
        const matchedKeyword = scentKeywordMockData.find(
          (item) => item.keyword_id === keyword.keyword_id
        )

        return {
          title: matchedKeyword?.keyword_division ?? "Keyword",
          answer: keyword.keyword_name,
        }
      }),
    })

    saveAnalysisResult(result)

    return HttpResponse.json(result, { status: 201 })
  }),
]
