import { instance } from "@/shared/api/axios-instance"
import type { AnalysisResult, ResultType } from "../types"

type GetAnalysisDetailParams = {
  id: number
  type: ResultType
}

export const getAnalysisDetail = async ({
  id,
  type,
}: GetAnalysisDetailParams): Promise<AnalysisResult> => {
  const { data } = await instance.get<Omit<AnalysisResult, "type">>(
    `/analyses/history/${id}`,
    {
      params: {
        type,
      },
    }
  )

  return {
    ...data,
    type,
  } as AnalysisResult
}
