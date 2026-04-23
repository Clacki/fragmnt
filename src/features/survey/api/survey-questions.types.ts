import { instance } from "@/shared/api/axios-instance"
import type { SurveyQuestion } from "../types/survey.types"

export const getSurveyQuestions = async () => {
  const { data } = await instance.get<SurveyQuestion[]>("/question/survey")

  return data
}
