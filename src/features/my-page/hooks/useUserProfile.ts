import useAuthStore from "@/shared/api/use-auth-store"
import { useQuery } from "@tanstack/react-query"
import { getMyProfile } from "../api/user.api"
import type { UserProfile } from "../types"

export const useUserProfile = () => {
  const accessToken = useAuthStore((state) => state.accessToken)

  return useQuery<UserProfile>({
    queryKey: ["my-page", "userProfile", accessToken],
    queryFn: getMyProfile,
    enabled: !!accessToken,
    staleTime: 0,
    gcTime: 0,
  })
}
