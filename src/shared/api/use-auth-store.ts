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

  logout: () => void
}

const useAuthStore = create<AuthStoreState>()(
  persist(
    (set) => ({
      accessToken: null,
      setAccessToken: (accessToken) => set({ accessToken }),

      refreshToken: null,
      setRefreshToken: (refreshToken) => set({ refreshToken }),

      profile: null,
      setProfile: (profile) => set({ profile }),

      logout: () => {
        // TODO: 로그아웃 요청도 보내야 합니다
        // TODO: 추후 profile을 저장하면 그것도 지워야 합니다
        set({ accessToken: null, refreshToken: null })
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
