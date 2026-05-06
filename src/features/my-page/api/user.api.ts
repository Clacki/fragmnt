import { instance } from "@/shared/api/axios-instance"
import type { HistoryItem } from "../mocks/history.mock"
import type {
  FavoriteScent,
  UpdateFavoriteScentRequest,
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

export const updateFavoriteScent = async ({
  id,
  type = "image",
  status,
}: UpdateFavoriteScentRequest) => {
  const { data } = await instance.patch(
    `/analyses/feedback/${id}`,
    { status },
    {
      params: { type },
    }
  )

  return data
}

export const getHistoryList = async (): Promise<HistoryItem[]> => {
  const { data } = await instance.get("/analyses/history")
  return data
}

export const logoutApi = async (refresh: string): Promise<void> => {
  await instance.post("/accounts/logout", {
    refresh,
  })
}
