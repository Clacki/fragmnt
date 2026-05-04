import { instance } from "@/shared/api/axios-instance"
import type {
  GetWebSharedParams,
  GetWebSharedResponse,
} from "../types/web-shared.types"

export const getWebShared = async ({ shareId }: GetWebSharedParams) => {
  const { data } = await instance.get<GetWebSharedResponse>(
    `/analyses/web-share/${shareId}`
  )

  return data
}
