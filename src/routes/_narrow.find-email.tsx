import FindEmailPage from "@/features/_narrow.find-email/page/FindEmailPage"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_narrow/find-email")({
  component: FindEmailPage,
})
