import { useQuery } from "@tanstack/react-query"
import { getSurveyQuestions } from "../api/survey-questions.types"

export const useSurveyQuestions = () => {
  return useQuery({
    queryKey: ["survey-questions"],
    queryFn: getSurveyQuestions,
  })
}
