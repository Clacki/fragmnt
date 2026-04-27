import type { RecommendedScent } from "@/shared/types"

export type SurveyAnswerItem = {
  content: string
}

export type SurveyQuestion = {
  title: string
  additional: string
  left_label: string
  right_label: string
  answer: SurveyAnswerItem[]
}

export type SurveyResultRequest = {
  title: string
  results: string
  question_num: number
}

export type SurveyResultResponse = {
  id: number
  recommended_scent: RecommendedScent
  ai_comment: string
  match_score: number
}
