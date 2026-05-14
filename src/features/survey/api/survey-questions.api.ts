import { instance } from "@/shared/api/axios-instance"
import type {
  SurveyQuestion,
  SurveyResultRequest,
  SurveyResultResponse,
} from "../types/survey.types"

export const getSurveyQuestions = async () => {
  const { data } = await instance.get<SurveyQuestion[]>("/question/survey")

  return data
}

export const postSurveyResult = async (
  body: SurveyResultRequest[]
): Promise<SurveyResultResponse> => {
  const { data } = await instance.post("/question/survey", body)

  return data
}
