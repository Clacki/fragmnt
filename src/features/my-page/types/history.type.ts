import type { BaseImageCardProps, ResultType } from "@/shared/types"

export type HistoryItem = {
  id: number
  type: ResultType
  recommended_scent: {
    id: number
    name: string
    tags: string[]
    description: string | null
    eng_name: string
    thumbnail_url: string
  }
  review: string | null
  rating: number | null
  created_at: string
}

export type HistoryCardProps = BaseImageCardProps & {
  badgeText?: string
  tags?: string[]
  date: string
}

// 추후 렌더링 단계에서 사용
export type HistoryCardItem = {
  id: number
  imageSrc?: string
  title: string
  badgeText?: string
  tags?: string[]
  date: string
}
