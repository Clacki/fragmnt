import ScentKeyword from "@/features/scent-keyword/page/ScentKeyword"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_wide/scent-keyword")({
  component: ScentKeyword,
})
