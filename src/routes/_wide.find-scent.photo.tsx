import ScentPhoto from "@/features/photo/page/ScentPhoto"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_wide/find-scent/photo")({
  component: ScentPhoto,
})
