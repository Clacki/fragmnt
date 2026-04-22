import Review from "@/features/review/page/Review"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_wide/review")({
  component: Review,
})
