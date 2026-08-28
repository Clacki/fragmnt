import { mockApi } from "@/shared/mocks/mock-api"
import { http, HttpResponse } from "msw"
import { mockPasswordReset } from "./mock-data/mock-password-reset"

export const findPasswordHandlers = [
  http.post(mockApi("/accounts/change-password"), () => {
    return HttpResponse.json(mockPasswordReset)
  }),
]
