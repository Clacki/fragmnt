import { useQuery } from "@tanstack/react-query"
import { getHistoryList } from "../api/user.api"
import type { HistoryItem } from "../types"

export const useHistoryList = () => {
  return useQuery<HistoryItem[]>({
    queryKey: ["my-page", "historyList"],
    queryFn: getHistoryList,
    staleTime: 0,
    refetchOnMount: "always",
    gcTime: 0,
  })
}
