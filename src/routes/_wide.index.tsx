import MainPage from "@/features/_wide.index/page/MainPage"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_wide/")({
  component: MainPage,
})
