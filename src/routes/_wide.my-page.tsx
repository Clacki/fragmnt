import MyPage from "@/features/my-page/pages/MyPage"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_wide/my-page")({
  component: MyPage,
})
