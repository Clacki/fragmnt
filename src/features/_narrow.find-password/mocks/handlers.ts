import { http, HttpResponse } from "msw"
import { mockPasswordReset } from "./mock-data/mock-password-reset"

const BASE_URL = import.meta.env.VITE_BASE_URL

export const findPasswordHandlers = [
  http.post(`${BASE_URL}/accounts/change-password`, () => {
    return HttpResponse.json(mockPasswordReset)
  }),
]
