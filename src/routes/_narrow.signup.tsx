import SignupPage from "@/features/_narrow.signup/page/SignupPage"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_narrow/signup")({
  component: SignupPage,
})
