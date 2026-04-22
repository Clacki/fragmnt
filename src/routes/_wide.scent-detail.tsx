import ScentDetail from "@/features/scent-detail/page/ScentDetail"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_wide/scent-detail")({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      id: Number(search.id) || 0,
    }
  },
  component: ScentDetail,
})
