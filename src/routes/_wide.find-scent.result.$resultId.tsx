/* eslint-disable react-refresh/only-export-components */

import ResultPage from "@/features/result/page/ResultPage"
import { createFileRoute } from "@tanstack/react-router"

type ResultType = "image" | "survey" | "keyword" | "chatbot"

const isResultType = (type: unknown): type is ResultType => {
  return (
    type === "image" ||
    type === "survey" ||
    type === "keyword" ||
    type === "chatbot"
  )
}

const ResultRoute = () => {
  const { resultId } = Route.useParams()
  const { type } = Route.useSearch()

  return <ResultPage resultId={Number(resultId)} type={type ?? undefined} />
}

export const Route = createFileRoute("/_wide/find-scent/result/$resultId")({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      type: isResultType(search.type) ? search.type : null,
    }
  },
  component: ResultRoute,
})
