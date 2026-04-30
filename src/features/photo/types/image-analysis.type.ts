import type { RecommendedScent } from "@/shared/types"

export type AnalyzeImageRequest = {
  image_key: string
}

export type ScentNote = {
  items: string[]
  title: string
  description: string
}

export type ScentNotes = {
  top: ScentNote
  middle: ScentNote
  base: ScentNote
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

export type ImageMetadata = {
  id: number
  dominant_color_hex: string
  contrast_ratio: number
  avg_brightness: number
  avg_saturation: number
  is_failed: boolean
  error_log: string | null
}
export type ImageAnalysisResult = {
  id: number
  recommended_scent: RecommendedScent
  presigned_image_url: string
  image_metadata: ImageMetadata
  ai_tags: string[]
  ai_keywords: string[]
  ai_intensity: number
  ai_comment: string | null
  match_score: number
  is_fallback: boolean
  created_at: string
}
