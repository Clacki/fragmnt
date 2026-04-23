import { http, HttpResponse } from "msw"
import { scentCardMockData } from "./scent-card.mock"

const BASE_URL = import.meta.env.VITE_BASE_URL

export const scentHandlers = [
  http.get(`${BASE_URL}/scents`, () => {
    return HttpResponse.json(scentCardMockData)
  }),
]
