import { ScentDetail } from "@/features/scent-detail/ScentDetail"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_wide/scent-detail")({
  validateSearch: (search: Record<string, unknown>) => {
    const id = Number(search.id)

    return {
      id: Number.isInteger(id) && id > 0 ? id : null,
    }
  },
  component: ScentDetail,
})
