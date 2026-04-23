import { findEmailHandlers } from "@/features/_narrow.find-email/mocks/handlers"
import { findPasswordHandlers } from "@/features/_narrow.find-password/mocks/handlers"
import { mainPageHandlers } from "@/features/_wide.index/mocks/main-page-handler"
import { myPageHandlers } from "@/features/my-page/mocks/handlers"
import { scentHandlers } from "@/features/scent-list/mocks/handlers"
import { http, HttpResponse } from "msw"

export const handlers = [
  // 기본 설정 핸들러 예시
  http.get("/api/hello", () => {
    return HttpResponse.json({ message: "Hello, world!", code: 200 })
  }),
  ...myPageHandlers,
  ...scentHandlers,
  ...mainPageHandlers,

  ...findEmailHandlers,

  ...findPasswordHandlers,
]
