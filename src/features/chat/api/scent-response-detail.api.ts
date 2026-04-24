import { instance } from "@/shared/api/axios-instance"
import type { GetScentDetailResponse } from "../types/message.types"

export const getScentDetail = async (id: number) => {
  const response = await instance.get<GetScentDetailResponse>(`scents/${id}`)

  return response.data
}
