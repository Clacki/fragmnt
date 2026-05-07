import { logoutApi } from "@/features/my-page/api/user.api"
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
import type { Profile } from "../types"

type AuthStoreState = {
  accessToken: string | null
  setAccessToken: (accessToken: string | null) => void

  profile: Profile | null
  setProfile: (profile: Profile | null) => void

  logout: () => Promise<void>

  clearAuth: () => void
}

const useAuthStore = create<AuthStoreState>()(
  persist(
    (set) => ({
      accessToken: null,
      setAccessToken: (accessToken) => set({ accessToken }),

      profile: null,
      setProfile: (profile) => set({ profile }),

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
