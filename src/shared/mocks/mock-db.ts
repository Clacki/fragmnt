import { mockFavoriteScents } from "@/features/my-page/mocks/favoriteScents.mock"
import { mockHistoryList } from "@/features/my-page/mocks/history.mock"
import { mockUserProfile } from "@/features/my-page/mocks/myPage.mock"
import { mockReviewList } from "@/features/my-page/mocks/review.mock"
import type { WebSharedResult } from "@/features/web-shared/types/web-shared.types"
import type { AnalysisResult } from "@/shared/types"

const STORAGE_KEY = "fragmnt-mock-db"

const clone = <T>(value: T): T => structuredClone(value)

const initialState = {
  favorites: clone(mockFavoriteScents),
  histories: clone(mockHistoryList),
  profile: clone(mockUserProfile),
  reviews: clone(mockReviewList),
}

type StoredMockDb = {
  analyses: AnalysisResult[]
  favorites: typeof mockFavoriteScents
  histories: typeof mockHistoryList
  profile: typeof mockUserProfile
  reviews: typeof mockReviewList
  shares: Record<string, WebSharedResult>
}

export const mockDb = {
  analyses: new Map<number, AnalysisResult>(),
  favorites: mockFavoriteScents,
  histories: mockHistoryList,
  profile: mockUserProfile,
  reviews: mockReviewList,
  shares: {} as Record<string, WebSharedResult>,
}

const hydrateMockDb = () => {
  const stored = sessionStorage.getItem(STORAGE_KEY)

  if (!stored) {
    return
  }

  try {
    const parsed = JSON.parse(stored) as StoredMockDb

    mockDb.analyses.clear()
    parsed.analyses.forEach((analysis) => {
      mockDb.analyses.set(analysis.id, analysis)
    })
    mockDb.favorites.splice(0, mockDb.favorites.length, ...parsed.favorites)
    mockDb.histories.splice(0, mockDb.histories.length, ...parsed.histories)
    Object.assign(mockDb.profile, parsed.profile)
    mockDb.reviews.splice(0, mockDb.reviews.length, ...parsed.reviews)
    Object.assign(mockDb.shares, parsed.shares)
  } catch {
    sessionStorage.removeItem(STORAGE_KEY)
  }
}

export const persistMockDb = (): boolean => {
  const stored: StoredMockDb = {
    analyses: [...mockDb.analyses.values()],
    favorites: mockDb.favorites,
    histories: mockDb.histories,
    profile: mockDb.profile,
    reviews: mockDb.reviews,
    shares: mockDb.shares,
  }

  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(stored))
    return true
  } catch {
    return false
  }
}

export const resetMockDb = () => {
  mockDb.analyses.clear()
  mockDb.favorites.splice(
    0,
    mockDb.favorites.length,
    ...clone(initialState.favorites)
  )
  mockDb.histories.splice(
    0,
    mockDb.histories.length,
    ...clone(initialState.histories)
  )
  Object.assign(mockDb.profile, clone(initialState.profile))
  mockDb.reviews.splice(
    0,
    mockDb.reviews.length,
    ...clone(initialState.reviews)
  )
  Object.keys(mockDb.shares).forEach((shareId) => {
    delete mockDb.shares[shareId]
  })
  sessionStorage.removeItem(STORAGE_KEY)
  persistMockDb()
}

hydrateMockDb()
