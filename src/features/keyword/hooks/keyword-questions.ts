import { useQuery } from "@tanstack/react-query"
import { getKeywordQuestions } from "../api/keyword-questions.api"

export const useKeywordQuestions = () => {
  return useQuery({
    queryKey: ["keyword-questions"],
    queryFn: getKeywordQuestions,
  })
}
