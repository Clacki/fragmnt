import { logoutApi } from "@/features/my-page/api/user.api"
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
import type { Profile } from "../types"
import { instance, plainInstance } from "./axios-instance"

type AuthStoreState = {
  accessToken: string | null
  setAccessToken: (accessToken: string | null) => void

  profile: Profile | null
  setProfile: (profile: Profile | null) => void

  refresh: () => Promise<void>
  getProfile: (accessToken: string) => Promise<void>
  logout: () => Promise<void>

  clearAuth: () => void
}

const useAuthStore = create<AuthStoreState>()(
  persist(
    (set, get) => ({
      accessToken: null,
      setAccessToken: (accessToken) => set({ accessToken }),

      profile: null,
      setProfile: (profile) => set({ profile }),

      refresh: async () => {
        const refreshResponse = await instance.post<{ access: string }>(
          "/accounts/me/refresh"
        )
        const { access } = refreshResponse.data
        set({ accessToken: access })

        const getProfile = get().getProfile
        await getProfile(access)
      },
      getProfile: async (accessToken) => {
        const response = await plainInstance.get<Profile>(
          "/accounts/me/profile",
          {
            headers: { Authorization: `Bearer ${accessToken}` },
            withCredentials: true,
          }
        )

        const profile = response.data
        set({ profile })
      },

      logout: async () => {
        try {
          await logoutApi(null)
        } finally {
          set({
            accessToken: null,
            profile: null,
          })
        }
      },

      clearAuth: () => {
        set({
          accessToken: null,
          profile: null,
        })
      },
    }),
    {
      name: "fragmnt store",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        accessToken: state.accessToken,
      }),
    }
  )
)

export default useAuthStore
