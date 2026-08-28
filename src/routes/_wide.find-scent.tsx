import FindScentLayout from "@/features/find-scent/layout/FindScentLayout"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_wide/find-scent")({
  component: FindScentLayout,
})
