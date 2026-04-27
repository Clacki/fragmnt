import { instance } from "@/shared/api/axios-instance"
import type {
  KeywordQuestion,
  PostKeywordResultRequest,
  PostKeywordResultResponse,
} from "../types/keyword-questions.types"

export const getKeywordQuestions = async () => {
  const { data } = await instance.get<KeywordQuestion[]>("question/keyword")

  return data
}

export const postKeywordResult = async (
  requestBody: PostKeywordResultRequest
) => {
  const { data } = await instance.post<PostKeywordResultResponse>(
    "/question/keyword",
    requestBody
  )

  return data
}
