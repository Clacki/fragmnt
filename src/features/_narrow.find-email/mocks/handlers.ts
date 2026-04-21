import { http, HttpResponse } from "msw"
import { mockEmailFound } from "./mock-data/mock-email-found"

const BASE_URL = import.meta.env.VITE_BASE_URL

export const findEmailHandlers = [
  http.post(`${BASE_URL}/accounts/find-email`, () => {
    return HttpResponse.json(mockEmailFound)
  }),
]
