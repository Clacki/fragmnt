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
