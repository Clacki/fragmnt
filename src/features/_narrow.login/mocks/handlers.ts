import { delay, http, HttpResponse } from "msw"

export const authHandlers = [
  http.post("*/accounts/login", async ({ request }) => {
    await delay(500)

    const body = (await request.json()) as {
      email?: string
      password?: string
    }

    if (!body.email || !body.password) {
      return HttpResponse.json(
        { message: "이메일과 비밀번호를 모두 입력해주세요." },
        { status: 400 }
      )
    }

    if (body.email !== "demo@demo.com" || body.password !== "demo") {
      return HttpResponse.json(
        { message: "이메일 또는 비밀번호가 올바르지 않습니다." },
        { status: 401 }
      )
    }

    return HttpResponse.json({
      access: "mock-access-token",
    })
  }),

  http.post("*/accounts/logout", async () => {
    await delay(300)

    return HttpResponse.json({
      message: "로그아웃되었습니다.",
    })
  }),

  http.post("*/accounts/me/refresh", async () => {
    await delay(200)

    return HttpResponse.json({
      access: "mock-access-token",
    })
  }),
]
