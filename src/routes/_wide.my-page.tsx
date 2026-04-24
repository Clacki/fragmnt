import MyPage from "@/features/my-page/pages/MyPage"
// import useAuthStore from "@/shared/api/use-auth-store"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_wide/my-page")({
  // beforeLoad: () => {
  //   const accessToken = useAuthStore.getState().accessToken

  //   if (!accessToken) {
  //     throw redirect({
  //       to: "/login",
  //     })
  //   }
  // },
  component: MyPage,
})
