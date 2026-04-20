export type HistoryItem = {
  id: number
  imageSrc?: string
  imageAlt?: string
  title: string
  badgeText?: string
  tags: string[]
  date: string
}

export const mockHistoryList: HistoryItem[] = [
  {
    id: 1,
    imageSrc: "/images/sample-perfume.png",
    imageAlt: "Golden Amber",
    title: "Golden Amber",
    badgeText: "챗봇 추천",
    tags: ["샌달우드", "베르가못"],
    date: "2026. 04. 12",
  },
  {
    id: 2,
    imageSrc: "/images/sample-perfume.png",
    imageAlt: "Rose Garden",
    title: "Rose Garden",
    badgeText: "오늘의 추천",
    tags: ["장미", "화이트 머스크"],
    date: "2026. 04. 10",
  },
  {
    id: 3,
    imageSrc: "/images/sample-perfume.png",
    imageAlt: "Fresh Lemon",
    title: "Fresh Lemon",
    badgeText: "챗봇 추천",
    tags: ["레몬", "머스크"],
    date: "2026. 04. 08",
  },
]
