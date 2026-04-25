import type { ScentDetailResponse } from "@/shared/types/scent-types/scent.type"
import { useQuery } from "@tanstack/react-query"
import { getScentDetail } from "../api/detail.api"

export const useDetailQuery = (id: number) => {
  return useQuery<ScentDetailResponse>({
    queryKey: ["scent-detail", id],
    queryFn: () => getScentDetail(id),
    enabled: Number.isFinite(id),
  })
}
