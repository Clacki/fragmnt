import ScentKeyword from "@/features/keyword/page/ScentKeyword"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_wide/find-scent/keyword")({
  component: ScentKeyword,
})
