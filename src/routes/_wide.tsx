import WideLayout from "@/features/_wide/layout/WideLayout"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_wide")({
  component: WideLayout,
})
