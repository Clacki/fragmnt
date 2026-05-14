import { http, HttpResponse } from "msw"
import { MainReviewMock } from "./mock-data/main-review-mock"

export const mainPageHandlers = [
  http.get("*/analyses/reviews/recent", () => {
    return HttpResponse.json(MainReviewMock)
  }),
]
