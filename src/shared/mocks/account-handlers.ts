import { http, HttpResponse } from "msw"
import { mockApi } from "./mock-api"
import { resetMockDb } from "./mock-db"

export const accountHandlers = [
  http.post(mockApi("/demo/reset"), () => {
    resetMockDb()
    return new HttpResponse(null, { status: 204 })
  }),
  http.post(mockApi("/accounts/signup"), () => {
    return HttpResponse.json(
      {
        detail: "회원가입이 완료되었습니다.",
      },
      { status: 201 }
    )
  }),

  http.post(mockApi("/accounts/verification/send-email"), () => {
    return HttpResponse.json({
      detail: "이메일 인증번호가 발송되었습니다.",
    })
  }),

  http.post(mockApi("/accounts/verification/verify-email"), () => {
    return HttpResponse.json({
      detail: "이메일 인증이 완료되었습니다.",
      token: "mock-email-verification-token",
    })
  }),

  http.post(mockApi("/accounts/verification/send-sms"), () => {
    return HttpResponse.json({
      detail: "SMS 인증번호가 발송되었습니다.",
    })
  }),

  http.post(mockApi("/accounts/verification/verify-sms"), () => {
    return HttpResponse.json({
      detail: "SMS 인증이 완료되었습니다.",
      sms_token: "mock-sms-verification-token",
    })
  }),
]
