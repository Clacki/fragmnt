import type { AxiosError } from "axios"
import { ERROR_CODE_TO_MESSAGE } from "../constants/error-code-to-message"

export const parseErrorMessage = <T extends AxiosError<{ code: string }>>(
  error: T
): string => {
  if (!error?.response?.data)
    throw new Error("---- 이 전에 에러 데이터를 가드해야 합니다")

  const errorCode = error.response.data
    .code as keyof typeof ERROR_CODE_TO_MESSAGE
  const errorMessage = ERROR_CODE_TO_MESSAGE[errorCode]
  if (errorMessage) return errorMessage

  const detailKeyCandidates = Object.keys(error.response.data).filter((key) =>
    key.includes("detail")
  )
  if (detailKeyCandidates.length === 0) return "알 수 없는 오류가 발생했습니다"
  const detailKey = detailKeyCandidates[0] as keyof typeof error.response.data
  if (!detailKey) throw new Error("---- UNREACHABLE")

  const value = error.response.data[detailKey]
  if (typeof value === "string") return value
  if (Array.isArray(value)) return value[0]
  if (typeof value === "object" && value !== null)
    return Object.entries(value)[0][1] as string

  return "알 수 없는 오류가 발생했습니다"
}
