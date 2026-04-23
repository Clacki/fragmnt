import type { ScentCategory, ScentSeason } from "../types/scent-card.type"

export type ScentApiItem = {
  id: number
  name: string
  englishName: string
  category: ScentCategory
  description: string
  imageUrl: string
  intensity: number
  tags: string[]
  season: ScentSeason[]
}

export type GetScentsResponse = {
  status: "success"
  data: ScentApiItem[]
}
