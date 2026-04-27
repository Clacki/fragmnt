import { useMutation, useQuery } from "@tanstack/react-query"
import {
  getKeywordQuestions,
  postKeywordResult,
} from "../api/keyword-questions.api"

export const useKeywordQuestions = () => {
  return useQuery({
    queryKey: ["keyword-questions"],
    queryFn: getKeywordQuestions,
  })
}

export const usePostKeywordResult = () => {
  return useMutation({
    mutationFn: postKeywordResult,
  })
}
