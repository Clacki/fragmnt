import { mockApi } from "@/shared/mocks/mock-api"
import { http, HttpResponse } from "msw"
import { mockEmailFound } from "./mock-data/mock-email-found"

export const findEmailHandlers = [
  http.post(mockApi("/accounts/find-email"), () => {
    return HttpResponse.json(mockEmailFound)
  }),
]
