import { instance } from "@/shared/api/axios-instance"
import type { HistoryItem } from "../mocks/history.mock"
import type {
  FavoriteScent,
  UpdateUserProfileRequest,
  UserProfile,
} from "../types"

export const getMyProfile = async (): Promise<UserProfile> => {
  const { data } = await instance.get("/accounts/me/profile")
  return data
}

export const updateMyProfile = async (
  body: UpdateUserProfileRequest
): Promise<UserProfile> => {
  const { data } = await instance.patch("/accounts/me/profile", body)
  return data
}

export const getFavoriteScents = async (): Promise<FavoriteScent[]> => {
  const { data } = await instance.get("/analyses/feedback")
  return data
}

export const getHistoryList = async (): Promise<HistoryItem[]> => {
  const { data } = await instance.get("/analyses/history")
  return data
}
