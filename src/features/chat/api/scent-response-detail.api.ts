import { instance } from "@/shared/api/axios-instance"
import type { GetScentDetailResponse } from "../types/message.types"

type GetScentDetailParams = {
  scentId: number
}

export const getScentDetail = async ({ scentId }: GetScentDetailParams) => {
  const { data } = await instance.get<GetScentDetailResponse>(
    `/scents/${scentId}`
  )

  return data
}
