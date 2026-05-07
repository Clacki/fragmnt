import NarrowLayout from "@/features/_narrow/layout/NarrowLayout"
import useAuthStore from "@/shared/api/use-auth-store"
import { createFileRoute, redirect } from "@tanstack/react-router"

export const Route = createFileRoute("/_narrow")({
  component: NarrowLayout,
  beforeLoad: () => {
    const accessToken = useAuthStore.getState().accessToken
    if (!accessToken) return

    throw redirect({
      to: "/",
      replace: true,
    })
  },
})
