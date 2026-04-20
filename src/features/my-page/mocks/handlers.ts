import { http, HttpResponse } from "msw"

import { mockFavoriteScents } from "./favoriteScents.mock"
import { mockHistoryList } from "./history.mock"
import { mockUserProfile } from "./myPage.mock"

const BASE_URL = import.meta.env.VITE_BASE_URL

export const myPageHandlers = [
  http.get(`${BASE_URL}/accounts/me`, () => {
    return HttpResponse.json(mockUserProfile)
  }),

  http.get(`${BASE_URL}/accounts/favorite-scents`, () => {
    return HttpResponse.json(mockFavoriteScents)
  }),

  http.get(`${BASE_URL}/analyses/`, () => {
    return HttpResponse.json(mockHistoryList)
  }),
]
