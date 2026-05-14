import type { AnalysisType, FavoriteScent } from "@/features/my-page/types"

export const mockFavoriteScents: FavoriteScent[] = [
  {
    id: 2,
    type: "image" as AnalysisType,
    created_at: "2026-04-10T00:00:00.000Z",
    scent: {
      id: 2,
      name: "Rose Mist",
      categories: "floral",
      tags: ["장미", "화이트 머스크"],
      description:
        "이슬 맺힌 장미 정원을 떠올리게 하는 우아하고 차분한 플로럴 향입니다.",
      eng_name: "Rose Mist",
      intensity: 64,
      season: ["spring", "summer"],
      thumbnail_url: "/mock-images/rose-mist.jpg",
    },
  },
]
