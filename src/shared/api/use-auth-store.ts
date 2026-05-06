import { logoutApi } from "@/features/my-page/api/user.api"
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
import type { Profile } from "../types"

type AuthStoreState = {
  accessToken: string | null
  setAccessToken: (accessToken: string | null) => void

  refreshToken: string | null
  setRefreshToken: (refreshToken: string | null) => void

  profile: Profile | null
  setProfile: (profile: Profile | null) => void

  logout: () => Promise<void>

  clearAuth: () => void
}

const useAuthStore = create<AuthStoreState>()(
  persist(
    (set, get) => ({
      accessToken: null,
      setAccessToken: (accessToken) => set({ accessToken }),

      refreshToken: null,
      setRefreshToken: (refreshToken) => set({ refreshToken }),

      profile: null,
      setProfile: (profile) => set({ profile }),

      logout: async () => {
        const refreshToken = get().refreshToken

        try {
          if (refreshToken) {
            await logoutApi(refreshToken)
          }
        } finally {
          set({
            accessToken: null,
            refreshToken: null,
            profile: null,
          })
        }
      },

      clearAuth: () => {
        set({
          accessToken: null,
          refreshToken: null,
          profile: null,
        })
      },
    }),
    {
      name: "fragmnt store",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
      }),
    }
  )
)

export default useAuthStore
