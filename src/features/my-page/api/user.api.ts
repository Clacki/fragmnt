import { instance } from "@/shared/api/axios-instance"
import type { HistoryItem } from "../mocks/history.mock"
import type { FavoriteScent, UserProfile } from "../types"

export const getMyProfile = async (): Promise<UserProfile> => {
  const { data } = await instance.get("/accounts/me")
  return data
}

export const getFavoriteScents = async (): Promise<FavoriteScent[]> => {
  const { data } = await instance.get("/accounts/favorite-scents")
  return data
}

export const getHistoryList = async (): Promise<HistoryItem[]> => {
  const { data } = await instance.get("/analyses/")
  return data
}
