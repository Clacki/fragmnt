import { create } from "zustand"
type AuthStoreState = {
  access_token: string | null
  setAccessToken: (access_token: string | null) => void
}

const useAuthStore = create<AuthStoreState>()((set) => ({
  access_token: null,
  setAccessToken: (access_token) => set({ access_token }),
}))

export default useAuthStore
