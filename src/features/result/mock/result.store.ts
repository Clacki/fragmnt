import { mockDb, persistMockDb } from "@/shared/mocks/mock-db"
import type { AnalysisResult } from "@/shared/types"

export const analysisResultStore = mockDb.analyses

export const saveAnalysisResult = (result: AnalysisResult) => {
  analysisResultStore.set(result.id, result)

  const historyIndex = mockDb.histories.findIndex(
    (item) => item.id === result.id && item.type === result.type
  )
  const historyItem = {
    id: result.id,
    type: result.type,
    recommended_scent: {
      id: result.recommended_scent.id,
      name: result.recommended_scent.name,
      tags: result.recommended_scent.tags,
      description: result.recommended_scent.description,
      eng_name: result.recommended_scent.eng_name,
      thumbnail_url: result.recommended_scent.thumbnail_url,
    },
    review: result.review ?? null,
    rating: result.rating ?? null,
    created_at: result.created_at,
  }

  if (historyIndex === -1) {
    mockDb.histories.unshift(historyItem)
  } else {
    mockDb.histories[historyIndex] = historyItem
  }

  persistMockDb()
}

export const getAnalysisResult = (id: number) => {
  return analysisResultStore.get(id)
}
