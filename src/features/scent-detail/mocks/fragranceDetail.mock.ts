import type { ScentDetailResponse } from "@/shared/types/scent-types/scent.type"

export const fragranceDetailMock: ScentDetailResponse = {
  data: {
    id: 1,
    name: "그린 포즈",
    eng_name: "Green Pause",
    description:
      "잠시 창문을 열고 식물의 숨을 들이마시는 순간을 닮은 향입니다. 생기 있지만 과하게 날카롭지 않아 공간에 자연스러운 여유를 만들어 줍니다.",
    categories: "green",
    tags: ["싱그러운", "자연스러운", "환기되는", "편안한"],
    keywords: ["플랜테리어", "산책", "싱그러움"],
    intensity: 61,
    is_bestseller: false,
    scent_notes: {
      top: {
        items: ["그린 리프", "바질", "베르가못"],
        title: "탑 노트",
        description: "싱그럽게 열리는 초록빛 향",
      },
      middle: {
        items: ["무화과잎", "세이지", "갈바넘"],
        title: "미들 노트",
        description: "식물의 결이 살아 있는 향",
      },
      base: {
        items: ["시더우드", "머스크", "모스"],
        title: "베이스 노트",
        description: "자연스럽게 잔향을 남기는 향",
      },
    },
    profile: {
      depth: 43,
      warmth: 28,
      softness: 46,
      freshness: 79,
      sweetness: 17,
    },
    season: ["spring", "summer"],
    recommended_places: [
      {
        name: "Living Room",
        imageUrl:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
        matchScore: 95,
        description: "식물이 많은 거실과 잘 어울리는 향",
      },
      {
        name: "Sunroom",
        imageUrl:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
        matchScore: 92,
        description: "햇살과 초록빛이 머무는 공간",
      },
      {
        name: "Workspace",
        imageUrl:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
        matchScore: 88,
        description: "숨이 트이는 느낌을 주는 작업 공간",
      },
    ],
    similar_scents: [
      {
        id: 15,
        name: "그린 우드",
        tags: ["차분한", "자연적인"],
        description: "자연의 깊이를 담은 우디 향",
        thumbnail_url: "",
      },
      {
        id: 22,
        name: "허브 브리즈",
        tags: ["싱그러운", "상쾌한"],
        description: "허브의 상쾌함을 담은 향",
        thumbnail_url: "",
      },
      {
        id: 23,
        name: "모스 가든",
        tags: ["촉촉한", "차분한"],
        description: "이끼 숲의 촉촉함을 닮은 향",
        thumbnail_url: "",
      },
    ],
    thumbnail_url: "",
    created_at: "2026-04-15T04:55:42.311990Z",
  },
}
