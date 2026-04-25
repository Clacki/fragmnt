import { http, HttpResponse } from "msw"

import { fragranceDetailMock } from "./fragranceDetail.mock"

const BASE_URL = import.meta.env.VITE_BASE_URL

export const detailPageHandlers = [
  http.get(`${BASE_URL}/scents/:id`, () => {
    return HttpResponse.json(fragranceDetailMock)
  }),
]
