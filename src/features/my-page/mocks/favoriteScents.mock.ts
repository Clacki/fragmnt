import type { FavoriteScent } from "@/features/my-page/types"

export const mockFavoriteScents: FavoriteScent[] = [
  {
    id: 2,
    type: "floral",
    created_at: "2026-04-10T00:00:00.000Z",
    scent: {
      id: 2,
      name: "Rose Garden",
      categories: "floral",
      tags: ["장미", "화이트 머스크"],
      description:
        "이슬 맺힌 장미 정원을 떠올리게 하는 우아하고 차분한 플로럴 향입니다.",
      eng_name: "Rose Garden",
      intensity: 64,
      season: ["spring", "summer"],
      thumbnail_url: "/images/sample-perfume.png",
    },
  },

  {
    id: 3,
    type: "woody",
    created_at: "2026-04-12T00:00:00.000Z",
    scent: {
      id: 7,
      name: "Serene Woods",
      categories: "woody",
      tags: ["우디", "차분한", "깊이감"],
      description:
        "깊은 숲속을 천천히 거닐 때 느껴지는 고요함을 닮은 향입니다.",
      eng_name: "Serene Woods",
      intensity: 72,
      season: ["autumn", "winter"],
      thumbnail_url: "/images/sample-perfume.png",
    },
  },

  {
    id: 4,
    type: "citrus",
    created_at: "2026-04-15T00:00:00.000Z",
    scent: {
      id: 13,
      name: "Citrus Dawn",
      categories: "citrus",
      tags: ["상쾌한", "밝은", "가벼운"],
      description: "이른 아침의 깨끗한 공기처럼 밝고 선명한 시트러스 향입니다.",
      eng_name: "Citrus Dawn",
      intensity: 57,
      season: ["spring", "summer"],
      thumbnail_url: "/images/sample-perfume.png",
    },
  },
]
