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

const AUTH_STORAGE_KEY = "fragmnt store"

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
        } catch {
          // 서버가 응답하지 않더라도 클라이언트 로그아웃은 완료합니다.
        } finally {
          set({
            accessToken: null,
            profile: null,
          })
          localStorage.removeItem(AUTH_STORAGE_KEY)
        }
      },

      clearAuth: () => {
        set({
          accessToken: null,
          profile: null,
        })
        localStorage.removeItem(AUTH_STORAGE_KEY)
      },
    }),
    {
      name: AUTH_STORAGE_KEY,
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        accessToken: state.accessToken,
      }),
    }
  )
)

export default useAuthStore
