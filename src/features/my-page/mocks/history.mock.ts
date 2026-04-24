export type HistoryItem = {
  id: number
  type: "analyses"
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
    type: "analyses",
    recommended_scent: {
      id: 12,
      name: "스모크드 팀버",
      tags: ["스모키한", "강렬한", "깊은", "묵직한"],
      description:
        "나무의 그을린 결 위에 은은한 스파이스가 더해진 향입니다. 지나치게 강하지 않지만 분명한 존재감으로 공간의 인상을 또렷하게 바꿔 줍니다.",
      eng_name: "Smoked Timber",
      thumbnail_url: "",
    },
    review: null,
    rating: null,
    created_at: "2026-04-23T01:51:25.450110Z",
  },
]
