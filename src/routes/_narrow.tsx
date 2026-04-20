import NarrowLayout from "@/features/_narrow/layout/NarrowLayout"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_narrow")({
  component: NarrowLayout,
})
