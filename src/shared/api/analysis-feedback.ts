import { instance } from "@/shared/api/axios-instance"

type AnalysisFeedbackType = "image" | "chatbot" | "keyword" | "survey"

type SaveAnalysisFeedbackParams = {
  id: number
  status: boolean
  type: AnalysisFeedbackType
}

type SaveAnalysisFeedbackResponse = {
  status: "success"
  message?: string
}

export const saveAnalysisFeedback = async ({
  id,
  status,
  type,
}: SaveAnalysisFeedbackParams) => {
  const { data } = await instance.patch<SaveAnalysisFeedbackResponse>(
    `/analyses/feedback/${id}`,
    {
      status,
    },
    {
      params: {
        type,
      },
    }
  )

  return data
}
