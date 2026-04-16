import { http, HttpResponse } from "msw"

import { mockUserProfile } from "./myPage.mock"

export const myPageHandlers = [
  http.get("api/v1/accounts/me", () => {
    return HttpResponse.json(mockUserProfile)
  }),
]
