import FindPasswordPage from "@/features/_narrow.find-password/page/FindPasswordPage"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_narrow/find-password")({
  component: FindPasswordPage,
})
