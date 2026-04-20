import FindScent from "@/features/find-scent/page/FindScent"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_wide/find-scent/")({
  component: FindScent,
})
