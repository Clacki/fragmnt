import type { BaseAnalysisResult } from "@/shared/types"

// base-result.mock.ts
export const baseAnalysisResultMockData: Omit<
  BaseAnalysisResult,
  "id" | "type"
> = {
  ai_comment:
    "입력된 취향과 분위기를 종합해보면, 과하게 무겁거나 달콤한 향보다는 맑고 자연스럽게 퍼지는 그린 계열의 향이 잘 어울립니다. Green Pause는 그린 리프와 베르가못의 산뜻한 첫인상으로 공간에 생기를 더하고, 무화과잎과 세이지의 부드러운 허브 노트가 차분한 균형을 만들어줍니다. 시더우드와 머스크의 은은한 잔향이 전체적인 분위기를 안정적으로 잡아주기 때문에, 일상 속에서 편안한 여유와 자연스러운 싱그러움을 느끼고 싶은 순간에 잘 맞는 향입니다.",
  match_score: 89,
  is_saved: false,
  created_at: "2026-04-22T05:21:47.289Z",
  review: null,
  rating: null,
  recommended_scent: {
    id: 21,
    name: "그린 포즈",
    eng_name: "Green Pause",
    description:
      "잠시 창문을 열고 식물의 숨을 들이마시는 순간을 닮은 향입니다. 생기 있지만 과하게 날카롭지 않아 공간에 자연스러운 여유를 만들어 줍니다.",
    categories: "green",
    tags: ["fresh", "natural", "airy", "comfortable"],
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
          "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
        matchScore: 95,
        description: "식물이 많은 거실과 잘 어울리는 향",
      },
      {
        name: "Sunroom",
        imageUrl:
          "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6",
        matchScore: 92,
        description: "햇살과 초록빛이 머무는 공간",
      },
      {
        name: "Workspace",
        imageUrl:
          "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
        matchScore: 88,
        description: "숨이 트이는 느낌을 주는 작업 공간",
      },
    ],
    similar_scents: [
      {
        id: 22,
        name: "피그 가든",
        eng_name: "Fig Garden",
        categories: "green",
        tags: ["fresh", "elegant", "natural", "relaxed"],
        description:
          "무화과잎의 싱그러움과 크리미한 과육 느낌이 조화로운 향입니다. 자연스럽고 세련된 무드로 공간에 여유로운 결을 더해 줍니다.",
        intensity: 67,
        season: ["spring", "summer", "autumn"],
        thumbnail_url: "/mock-images/fig-garden.jpg",
      },
      {
        id: 23,
        name: "바질 셰이드",
        eng_name: "Basil Shade",
        categories: "green",
        tags: ["herbal", "clear", "airy", "dry"],
        description:
          "바질과 허브의 선명한 초록향이 공간을 시원하게 정리해 줍니다. 개운하고 또렷한 분위기를 좋아하는 취향에 잘 맞는 향입니다.",
        intensity: 63,
        season: ["spring", "summer"],
        thumbnail_url: "/mock-images/basil-shade.jpg",
      },
      {
        id: 7,
        name: "세린 우즈",
        eng_name: "Serene Woods",
        categories: "woody",
        tags: ["calm", "deep", "natural", "stable"],
        description:
          "깊은 숲속을 천천히 거닐 때 느껴지는 고요함을 닮은 향입니다. 묵직하지만 답답하지 않고, 공간에 차분한 중심을 만들어 줍니다.",
        intensity: 72,
        season: ["autumn", "winter"],
        thumbnail_url: "/mock-images/serene-woods.jpg",
      },
    ],
    thumbnail_url: "/mock-images/green-pause.jpg",
    created_at: "2026-04-22T05:21:47.289Z",
  },
}
