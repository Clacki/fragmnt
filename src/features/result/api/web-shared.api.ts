import { instance } from "@/shared/api/axios-instance"

type PostWebShareParams = {
  resultId: number
  type: string
}

type PostWebShareResponse = {
  share_id: string
  og_crawler: string
}

export const postWebShare = async ({ resultId, type }: PostWebShareParams) => {
  const { data } = await instance.post<PostWebShareResponse>(
    "/analyses/web-share",
    {
      result_id: resultId,
      type,
    }
  )

  return data
}
