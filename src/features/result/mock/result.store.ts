import type { AnalysisResult } from "@/shared/types"

const STORAGE_KEY = "mock-analysis-results"

export const analysisResultStore = new Map<number, AnalysisResult>()

const getStoredResults = () => {
  const stored = sessionStorage.getItem(STORAGE_KEY)

  if (!stored) {
    return []
  }

  return JSON.parse(stored) as AnalysisResult[]
}

export const saveAnalysisResult = (result: AnalysisResult) => {
  analysisResultStore.set(result.id, result)

  const storedResults = getStoredResults()
  const nextResults = [
    ...storedResults.filter((item) => item.id !== result.id),
    result,
  ]

  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(nextResults))
}

export const getAnalysisResult = (id: number) => {
  const memoryResult = analysisResultStore.get(id)

  if (memoryResult) {
    return memoryResult
  }

  const storedResults = getStoredResults()
  const storedResult = storedResults.find((item) => item.id === id)

  if (storedResult) {
    analysisResultStore.set(id, storedResult)
  }

  return storedResult
}
