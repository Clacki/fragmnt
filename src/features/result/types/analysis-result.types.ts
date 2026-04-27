import type { RecommendedScent } from "@/shared/types"

export type AnalysisResult = {
  id: number
  recommended_scent: RecommendedScent
  ai_comment: string
  match_score: number
}
