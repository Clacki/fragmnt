import type { RecommendedScent } from "@/shared/types"

export type KeywordDivision =
  | "Place"
  | "MD"
  | "Texture"
  | "Time & Season"
  | "Scent Notes"

export type KeywordQuestion = {
  keyword_id: number
  keyword_division: KeywordDivision
  keyword_name: string
}

export type PostKeywordResultRequest = {
  keyword_id: number
  keyword_name: string
}[]

export type KeywordResult = {
  id: number
  recommended_scent: RecommendedScent
  ai_comment: string
  match_score: number
}

export type PostKeywordResultResponse = KeywordResult

export type SelectedKeyword = {
  keywordId: number
  keywordName: string
  keywordDivision: string
}
