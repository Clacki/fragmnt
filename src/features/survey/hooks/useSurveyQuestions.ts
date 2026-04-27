import { useMutation, useQuery } from "@tanstack/react-query"
import {
  getSurveyQuestions,
  postSurveyResult,
} from "../api/survey-questions.types"

export const useSurveyQuestions = () => {
  return useQuery({
    queryKey: ["survey-questions"],
    queryFn: getSurveyQuestions,
  })
}

export const useSurveyResultMutation = () => {
  return useMutation({
    mutationFn: postSurveyResult,
  })
}
