import { useQuery } from "@tanstack/react-query"
import { getMyProfile } from "../api/user.api"
import type { UserProfile } from "../types"

export const useUserProfile = () => {
  return useQuery<UserProfile>({
    queryKey: ["my-page", "userProfile"],
    queryFn: getMyProfile,
  })
}
