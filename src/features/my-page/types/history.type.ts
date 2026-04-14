import type { BaseImageCardProps } from "@/shared/types"

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
