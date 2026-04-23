import { instance } from "@/shared/api/axios-instance"
import type { KeywordQuestion } from "../types/keyword-questions.types"

export const getKeywordQuestions = async () => {
  const { data } = await instance.get<KeywordQuestion[]>("question/keyword")

  return data
}
