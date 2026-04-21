import { http, HttpResponse } from "msw"
import { MainReviewMock } from "./mock-data/main-review-mock"

const BASE_URL = import.meta.env.VITE_BASE_URL

export const mainPageHandlers = [
  http.get(`${BASE_URL}/question/mood/results`, () => {
    return HttpResponse.json(MainReviewMock)
  }),
]
