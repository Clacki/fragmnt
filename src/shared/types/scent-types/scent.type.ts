import type { BaseImageCardProps } from "@/shared/types"

export type SimilarScentProps = BaseImageCardProps & {
  label?: string
  description?: string
}

export type ProfileMetric = {
  label: string
  value: number
  leftText: string
  rightText: string
}

export type ScentNote = {
  items: string[]
  title: string
  description: string
}

export type ScentProfile = {
  depth: number
  warmth: number
  softness: number
  freshness: number
  sweetness: number
}

export type RecommendedPlace = {
  name: string
  imageUrl: string
  matchScore: number
  description: string
}

export type ScentDetail = {
  id: number
  name: string
  eng_name: string
  description: string
  categories: string
  tags: string[]
  keywords: string[]
  intensity: number
  is_bestseller: boolean
  scent_notes: {
    top: ScentNote
    middle: ScentNote
    base: ScentNote
  }
  profile: ScentProfile
  season: string[]
  recommended_places: RecommendedPlace[]
  similar_scents: number[]
  thumbnail_url: string
  created_at: string
}

export type ScentDetailResponse = {
  scent: ScentDetail
}
