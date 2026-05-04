import { useQuery } from "@tanstack/react-query"
import { getWebShared } from "../api/web-shared.api"

type UseGetWebSharedParams = {
  shareId: string
}

export const useGetWebShared = ({ shareId }: UseGetWebSharedParams) => {
  return useQuery({
    queryKey: ["web-shared", shareId],
    queryFn: () => getWebShared({ shareId }),
    enabled: Boolean(shareId),
  })
}
