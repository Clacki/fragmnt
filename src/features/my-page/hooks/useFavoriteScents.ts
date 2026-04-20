import { useQuery } from "@tanstack/react-query"
import { getFavoriteScents } from "../api/user.api"
import type { FavoriteScent } from "../types"

export const useFavoriteScents = () => {
  const query = useQuery<FavoriteScent[]>({
    queryKey: ["favoriteScents"],
    queryFn: getFavoriteScents,
  })

  return {
    favoriteScents: query.data ?? [],
    isLoading: query.isLoading,
    error: query.error,
  }
}
