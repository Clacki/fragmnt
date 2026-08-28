import { instance } from "@/shared/api/axios-instance"
import type { ScentDetailResponse } from "@/shared/types/scent-types/scent.type"

type GetScentDetailParams = {
  scentId: number
}

export const getScentDetail = async ({ scentId }: GetScentDetailParams) => {
  const { data } = await instance.get<ScentDetailResponse>(`/scents/${scentId}`)

  return data
}
