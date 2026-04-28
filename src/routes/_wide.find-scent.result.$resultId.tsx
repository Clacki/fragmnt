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

const normalizeSearchId = (value: unknown) => {
  if (typeof value !== "string" && typeof value !== "number") {
    return undefined
  }

  const normalizedValue = String(value).replaceAll('"', "")
  const numericValue = Number(normalizedValue)

  return Number.isFinite(numericValue) ? numericValue : undefined
}

const ResultRoute = () => {
  const { resultId } = Route.useParams()
  const search = Route.useSearch()

  return (
    <ResultPage
      resultId={resultId}
      type={search.type}
      sessionId={"sessionId" in search ? search.sessionId : undefined}
    />
  )
}

export const Route = createFileRoute("/_wide/find-scent/result/$resultId")({
  validateSearch: (search: Record<string, unknown>) => {
    const type = isResultType(search.type) ? search.type : "image"

    if (type !== "chat") {
      return { type }
    }

    return {
      type,
      sessionId: normalizeSearchId(search.sessionId),
    }
  },
  component: ResultRoute,
})
