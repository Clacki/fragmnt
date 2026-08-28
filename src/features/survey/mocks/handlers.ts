import { createAnalysisResultMock } from "@/features/result/mock/result-factory"
import { saveAnalysisResult } from "@/features/result/mock/result.store"
import { mockApi } from "@/shared/mocks/mock-api"
import { delay, http, HttpResponse } from "msw"
import type { SurveyResultRequest } from "../types/survey.types"
import { surveyQuestionMockData } from "./scent-survey-mock"

export const surveyHandlers = [
  http.get(mockApi("/question/survey"), () => {
    return HttpResponse.json(surveyQuestionMockData)
  }),

  http.post(mockApi("/question/survey"), async ({ request }) => {
    const body = (await request.json()) as SurveyResultRequest[]

    if (!Array.isArray(body) || body.length === 0) {
      return HttpResponse.json(
        { message: "설문 답변이 없습니다." },
        { status: 400 }
      )
    }

    await delay(1500)

    const resultId = Date.now()

    const result = createAnalysisResultMock({
      id: resultId,
      type: "survey",
      userInput: body.map((item) => ({
        title: item.title,
        answer: item.results,
      })),
    })

    saveAnalysisResult(result)

    return HttpResponse.json(result, { status: 201 })
  }),
]
