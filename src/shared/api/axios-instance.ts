import axios from "axios"
import { checkEnvVar } from "../utils/check-env-var"
import useAuthStore from "./use-auth-store"

const baseURL = checkEnvVar(import.meta.env.VITE_BASE_URL)

// NOTE: do not export
const headOnlyInstance = axios.create({ baseURL, withCredentials: true })
headOnlyInstance.interceptors.request.use((config) => {
  const accessToken = useAuthStore.getState().access_token
  if (!accessToken) {
    return config
  }

  config.headers.Authorization = `Bearer ${accessToken}`
  return config
})

const headlessInstance = axios.create({ baseURL, withCredentials: true })

// TODO: interceptor 로직 구현해야
const instance = axios.create({ baseURL, withCredentials: true })

export { headlessInstance, instance }
