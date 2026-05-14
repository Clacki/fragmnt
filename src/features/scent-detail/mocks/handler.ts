import { http, HttpResponse } from "msw"
import { getFragranceDetailMock } from "./fragranceDetail.mock"

const BASE_URL = import.meta.env.VITE_BASE_URL

export const detailPageHandlers = [
  http.get(`${BASE_URL}/scents/:id`, ({ params }) => {
    const scentId = Number(params.id)
    const fragranceDetail = getFragranceDetailMock(scentId)

    if (!fragranceDetail) {
      return HttpResponse.json(
        { message: "향기 정보를 찾을 수 없습니다." },
        { status: 404 }
      )
    }

    return HttpResponse.json(fragranceDetail)
  }),
]
