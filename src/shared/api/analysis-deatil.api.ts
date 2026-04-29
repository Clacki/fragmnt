import { instance } from "@/shared/api/axios-instance"
import type { ResultData } from "@/shared/types"

type ResultType = "image" | "survey" | "keyword" | "chatbot"

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
      type,
    },
  })

  return data
}
