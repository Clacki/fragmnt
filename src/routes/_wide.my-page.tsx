import { MyPage } from "@/features/my-page/MyPage"
import useAuthStore from "@/shared/api/use-auth-store"
import { createFileRoute, redirect } from "@tanstack/react-router"

export const Route = createFileRoute("/_wide/my-page")({
  beforeLoad: () => {
    const accessToken = useAuthStore.getState().accessToken

    if (!accessToken) {
      throw redirect({
        to: "/login",
        search: {
          reason: "unauthorized",
        },
      })
    }
  },
  component: MyPage,
})
