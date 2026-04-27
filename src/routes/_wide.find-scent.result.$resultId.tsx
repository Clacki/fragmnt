/* eslint-disable react-refresh/only-export-components */

import ResultPage from "@/features/result/page/ResultPage"
import { createFileRoute } from "@tanstack/react-router"

const ResultRoute = () => {
  const { resultId } = Route.useParams()

  return <ResultPage resultId={resultId} />
}

export const Route = createFileRoute("/_wide/find-scent/result/$resultId")({
  component: ResultRoute,
})
