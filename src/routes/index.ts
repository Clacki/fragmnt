import MainPage from "@/features/main/page/MainPage"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  component: MainPage,
})
