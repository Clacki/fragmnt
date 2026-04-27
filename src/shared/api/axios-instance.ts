import axios, { AxiosError } from "axios"
import { BASE_URL } from "../env/env-vars"
import useAuthStore from "./use-auth-store"

// NOTE: 아무것도 없이 (Authorization: Bearer ... 없이, 쿠키 없이) 요청을 보내야 할 때 사용합니다
const plainInstance = axios.create({ baseURL: BASE_URL })

/** jwt 토큰 재발급 성공 이후 재요청 할 때만 사용합니다 */
const headOnlyInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
})
headOnlyInstance.interceptors.request.use((config) => {
  const accessToken = useAuthStore.getState().accessToken
  if (!accessToken) {
    return config
  }

  config.headers.Authorization = `Bearer ${accessToken}`
  return config
})

// NOTE: 액세스 토큰을 넣고 요청할 때 사용합니다
// TODO: interceptor 구현해야
const instance = axios.create({ baseURL: BASE_URL, withCredentials: true })

// NOTE: 헤더에 access token을 넣습니다
instance.interceptors.request.use((config) => {
  const accessToken = useAuthStore.getState().accessToken
  if (!accessToken) {
    return config
  }

  config.headers.Authorization = `Bearer ${accessToken}`
  return config
})

// NOTE: 헤더에 access token이 없거나 만료되었을 때 핸들링
instance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const state = useAuthStore.getState()
    const refreshToken = state.refreshToken
    const setAccessToken = state.setAccessToken
    const setRefreshToken = state.setRefreshToken
    // const logout = state.logout
    // 로그아웃 주석처리로 같이 주석처리

    // NOTE: 재발급에 사용할 refresh token 없으면 에러 그대로 뱉음
    if (!refreshToken || !error.config) return Promise.reject(error)

    try {
      // NOTE: 재발급 성공
      const refreshResponse = await plainInstance.post("/accounts/me/refresh", {
        refresh: refreshToken,
      })
      const { access, refresh } = refreshResponse.data
      setAccessToken(access)
      setRefreshToken(refresh)

      const response = await headOnlyInstance.request(error.config)
      return response
    } catch (error) {
      // NOTE: 재발급 실패 -> 추가 요청 없이 로그아웃
      console.log({ error })
      // logout()
      // TODO : 리프레쉬 토큰 확인 필요
      return Promise.reject(error)
    }
  }
)

export { instance, plainInstance }
