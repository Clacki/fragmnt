export type HistoryItem = {
  id: number
  type: "image"
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
export const mockHistoryList: HistoryItem[] = [
  {
    id: 4,
    type: "image",
    recommended_scent: {
      id: 21,
      name: "그린 포즈",
      tags: ["싱그러운", "자연스러운", "맑은", "편안한"],
      description:
        "잠시 창문을 열고 식물의 숨을 들이마시는 순간을 닮은 향입니다. 생기 있지만 과하게 날카롭지 않아 공간에 자연스러운 여유를 만들어 줍니다.",
      eng_name: "Green Pause",
      thumbnail_url: "/mock-images/green-pause.jpg",
    },
    review: null,
    rating: null,
    created_at: "2026-04-23T01:51:25.450110Z",
  },
]
