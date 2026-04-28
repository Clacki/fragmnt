import { instance } from "@/shared/api/axios-instance"
import type { ResultData } from "@/shared/types"

type ResultType = "image" | "survey" | "keyword" | "chat"
type AnalysisDetailApiType = "image" | "survey" | "keyword" | "chatbot"

const ANALYSIS_DETAIL_API_TYPE: Record<ResultType, AnalysisDetailApiType> = {
  image: "image",
  survey: "survey",
  keyword: "keyword",
  chat: "chatbot",
}

type GetAnalysisDetailParams = {
  id: number
  type: ResultType
}

export const getAnalysisDetail = async ({
  id,
  type,
}: GetAnalysisDetailParams) => {
  const { data } = await instance.get<ResultData>(`/analyses/detail/${id}`, {
    params: {
      type: ANALYSIS_DETAIL_API_TYPE[type],
    },
  })

  return data
}
