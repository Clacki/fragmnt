import type { ScentNote } from "../scent-types/scent.type"

export type ResultType = "image" | "keyword" | "survey" | "chatbot"

export type AnalysisResult =
  | ImageAnalysisResult
  | KeywordAnalysisResult
  | SurveyAnalysisResult
  | ChatbotAnalysisResult

export type BaseAnalysisResult = {
  id: number
  type: ResultType
  ai_comment: string
  match_score: number
  recommended_scent: RecommendedScent
  is_saved: boolean
  created_at: string
  review?: string | null
  rating?: number | null
}

export type ImageAnalysisResult = BaseAnalysisResult & {
  type: "image"
  presigned_image_url: string
  image_metadata: ImageMetadata
  ai_tags: string[]
  ai_keywords: string[]
  ai_intensity: number
  is_fallback: boolean
}

export type KeywordAnalysisResult = BaseAnalysisResult & {
  type: "keyword"
  user_input: UserInput[]
}

export type SurveyAnalysisResult = BaseAnalysisResult & {
  type: "survey"
  user_input: UserInput[]
}

export type ChatbotAnalysisResult = BaseAnalysisResult & {
  type: "chatbot"
  source_type: "chatbot"
  user_message: string | null
  ai_keywords: string[]
}

export type UserInput = {
  title: string
  answer: string
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
  scent_notes: {
    top: ScentNote
    middle: ScentNote
    base: ScentNote
  }
  profile: {
    depth: number
    warmth: number
    softness: number
    freshness: number
    sweetness: number
  }
  season: string[]
  recommended_places: {
    name: string
    imageUrl: string
    matchScore: number
    description: string
  }[]
  similar_scents: SimilarScentType[]
  thumbnail_url: string
  created_at: string
}
