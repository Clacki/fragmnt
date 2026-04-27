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

export type RecommendedScent = {
  id: number
  name: string
  eng_name: string
  description: string
  categories: string
  tags: string[]
  keywords: string[]
  intensity: number
  is_bestseller: boolean
  scent_notes: ScentNotes
  profile: ScentProfile
  season: string[]
  recommended_places: RecommendedPlace[]
  thumbnail_url: string
  created_at: string
  similar_scents: SimilarScentType[]
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
  image_metadata: ImageMetadata
  ai_tags: string[]
  ai_keywords: string[]
  ai_intensity: number
  ai_comment: string
  match_score: number
  is_fallback: boolean
  created_at: string
}

export type SimilarScentType = {
  id: number
  name: string
  eng_name: string
  categories: string
  tags: string[]
  description: string
  intensity: number
  season: string[]
  thumbnail_url: string
}
