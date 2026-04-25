import { instance } from "@/shared/api/axios-instance"

import type { ScentDetailResponse } from "@/shared/types/scent-types/scent.type"

export const getScentDetail = async (
  id: number
): Promise<ScentDetailResponse> => {
  const { data } = await instance.get(`/scents/${id}`)
  return data
}
