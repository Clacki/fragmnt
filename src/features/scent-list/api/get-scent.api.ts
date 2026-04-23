import { instance } from "@/shared/api/axios-instance"

import type { ScentCardItem } from "../types/scent-card.type"
import type { GetScentsResponse } from "./scent-api.type"

export const getScents = async (): Promise<ScentCardItem[]> => {
  const { data } = await instance.get<GetScentsResponse>("/scents")

  return data.data.map((item) => ({
    id: item.id,
    name: item.name,
    eng_name: item.englishName,
    description: item.description,
    imageUrl: item.imageUrl,
    tags: item.tags,
    category: item.category,
    season: item.season,
    intensity: item.intensity,
  }))
}
