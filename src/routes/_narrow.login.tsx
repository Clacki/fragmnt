import LoginPage from "@/features/_narrow.login/page/LoginPage"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_narrow/login")({
  component: LoginPage,
})
