import ResultPage from "@/features/result/page/ResultPage"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_wide/find-scent/result")({
  component: ResultPage,
})
