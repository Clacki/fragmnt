import ScentList from "@/features/scent-list/page/ScentList"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_wide/scent-list")({
  component: ScentList,
})
