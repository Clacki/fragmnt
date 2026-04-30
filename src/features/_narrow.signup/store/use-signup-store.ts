import { AxiosError } from "axios"
import { create } from "zustand"

type SignupStoreState = {
  modalKey: "success" | "error" | null
  setModalKey: (modelKey: "success" | "error" | null) => void

  signupError: AxiosError | null
  setSignupError: (signupError: AxiosError | null) => void
}

const useSignupStore = create<SignupStoreState>()((set) => ({
  modalKey: null,
  setModalKey: (modalKey) => set({ modalKey }),

  signupError: null,
  setSignupError: (signupError) => set({ signupError }),
}))

export default useSignupStore
