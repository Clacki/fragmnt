import LoginPage from "@/features/_narrow.login/page/LoginPage"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_narrow/login")({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      reason: typeof search.reason === "string" ? search.reason : undefined,
    }
  },
  component: LoginPage,
})
