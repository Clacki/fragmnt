import { create } from "zustand"

type SignupStoreState = {
  modalKey: "success" | "error" | null
  setModalKey: (modelKey: "success" | "error" | null) => void
}

const useSignupStore = create<SignupStoreState>()((set) => ({
  modalKey: null,
  setModalKey: (modalKey) => set({ modalKey }),
}))

export default useSignupStore
