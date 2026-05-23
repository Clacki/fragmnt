import { http, HttpResponse } from "msw"

const BASE_URL = import.meta.env.VITE_BASE_URL

export const accountHandlers = [
  http.post(`${BASE_URL}/accounts/signup`, () => {
    return HttpResponse.json(
      {
        detail: "회원가입이 완료되었습니다.",
      },
      { status: 201 }
    )
  }),

  http.post(`${BASE_URL}/accounts/verification/send-email`, () => {
    return HttpResponse.json({
      detail: "이메일 인증번호가 발송되었습니다.",
    })
  }),

  http.post(`${BASE_URL}/accounts/verification/verify-email`, () => {
    return HttpResponse.json({
      detail: "이메일 인증이 완료되었습니다.",
      token: "mock-email-verification-token",
    })
  }),

  http.post(`${BASE_URL}/accounts/verification/send-sms`, () => {
    return HttpResponse.json({
      detail: "SMS 인증번호가 발송되었습니다.",
    })
  }),

  http.post(`${BASE_URL}/accounts/verification/verify-sms`, () => {
    return HttpResponse.json({
      detail: "SMS 인증이 완료되었습니다.",
      sms_token: "mock-sms-verification-token",
    })
  }),
]
