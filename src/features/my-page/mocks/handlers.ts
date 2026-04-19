import { http, HttpResponse } from "msw"

import { mockFavoriteScents } from "./favoriteScents.mock"
import { mockUserProfile } from "./myPage.mock"

export const myPageHandlers = [
  http.get("api/v1/accounts/me", () => {
    return HttpResponse.json(mockUserProfile)
  }),

  http.get("api/v1/accounts/favorite-scents", () => {
    return HttpResponse.json(mockFavoriteScents)
  }),
]
