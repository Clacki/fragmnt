export type ScentCategory =
  | "floral"
  | "woody"
  | "citrus"
  | "musk"
  | "green"
  | "powdery"
  | "spicy"
  | "aquatic"
  | "fruity"
  | "amber"

export type ScentSeason = "spring" | "summer" | "autumn" | "winter"

export type ScentIntensityLabel = "weak" | "normal" | "strong"

export type ScentCardItem = {
  id: number
  name: string
  eng_name: string
  description: string
  imageUrl: string
  tags: string[]
  category: string
  season: string[]
  intensity: number
}
