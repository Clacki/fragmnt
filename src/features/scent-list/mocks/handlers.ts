import { mockApi } from "@/shared/mocks/mock-api"
import { http, HttpResponse } from "msw"
import { scentCardMockData } from "./scent-card.mock"

export const scentHandlers = [
  http.get(mockApi("/scents"), () => {
    return HttpResponse.json(scentCardMockData)
  }),
]
