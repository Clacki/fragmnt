import { http, HttpResponse } from "msw"

export const handlers = [
  // 기본 설정 핸들러 예시
  http.get("/api/hello", () => {
    return HttpResponse.json({ message: "Hello, world!", code: 200 })
  }),
]
