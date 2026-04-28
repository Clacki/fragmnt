/* eslint-disable react-refresh/only-export-components */

import ResultPage from "@/features/result/page/ResultPage"
import { createFileRoute } from "@tanstack/react-router"

type ResultType = "image" | "survey" | "keyword" | "chat"

const isResultType = (value: unknown): value is ResultType => {
  return (
    value === "image" ||
    value === "survey" ||
    value === "keyword" ||
    value === "chat"
  )
}

const ResultRoute = () => {
  const { resultId } = Route.useParams()
  const { type } = Route.useSearch()

  return <ResultPage resultId={Number(resultId)} type={type} />
}

export const Route = createFileRoute("/_wide/find-scent/result/$resultId")({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      type: isResultType(search.type) ? search.type : "image",
    }
  },
  component: ResultRoute,
})
