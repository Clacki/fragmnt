import axios from "axios"
import { checkEnvVar } from "../utils/check-env-var"

const baseURL = checkEnvVar(import.meta.env.VITE_BASE_URL)

// NOTE: 아무것도 없이 (Authorization: Bearer ... 없이, 쿠키 없이) 요청을 보내야 할 때 사용합니다
const plainInstance = axios.create({ baseURL })

// NOTE: 액세스 토큰을 넣고 요청할 때 사용합니다
// TODO: interceptor 구현해야
const instance = axios.create({ baseURL, withCredentials: true })

export { instance, plainInstance }
