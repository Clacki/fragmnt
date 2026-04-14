export type HistoryCardProps = {
  imageSrc?: string
  imageAlt?: string
  title: string
  badgeText?: string
  tags?: string[]
  date: string
  onClick?: () => void
  className?: string
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
