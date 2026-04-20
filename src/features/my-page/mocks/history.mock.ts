import type { HistoryCardProps } from "@/features/my-page/types"

type MockHistoryItem = HistoryCardProps & {
  id: number
}

export const mockHistoryList: MockHistoryItem[] = [
  {
    id: 1,
    imageSrc: "/images/sample-perfume.png",
    imageAlt: "Golden Amber",
    title: "Golden Amber",
    badgeText: "챗봇 추천",
    tags: ["샌달우드", "베르가못"],
    date: "2026. 04. 12",
    onClick: () => {
      console.log("Golden Amber clicked")
    },
  },
  {
    id: 2,
    imageSrc: "/images/sample-perfume.png",
    imageAlt: "Rose Garden",
    title: "Rose Garden",
    badgeText: "오늘의 추천",
    tags: ["장미", "화이트 머스크"],
    date: "2026. 04. 10",
    onClick: () => {
      console.log("Rose Garden clicked")
    },
  },
  {
    id: 3,
    imageSrc: "/images/sample-perfume.png",
    imageAlt: "Fresh Lemon",
    title: "Fresh Lemon",
    badgeText: "챗봇 추천",
    tags: ["레몬", "머스크"],
    date: "2026. 04. 08",
    onClick: () => {
      console.log("Fresh Lemon clicked")
    },
  },
]
