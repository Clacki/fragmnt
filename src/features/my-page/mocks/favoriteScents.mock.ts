import type { FavoriteScent } from "@/features/my-page/types"

export const mockFavoriteScents: FavoriteScent[] = [
  {
    id: 1,
    imageSrc: "/images/sample-perfume.png",
    imageAlt: "Golden Amber",
    category: "WOODY WARM",
    title: "Golden Amber",
    tags: ["샌달우드", "베르가못"],
    savedAt: "2026. 04. 12",
  },
  {
    id: 2,
    imageSrc: "/images/sample-perfume.png",
    imageAlt: "Rose Garden",
    category: "FLORAL",
    title: "Rose Garden",
    tags: ["장미", "화이트 머스크"],
    savedAt: "2026. 04. 10",
  },
  {
    id: 3,
    imageSrc: "/images/sample-perfume.png",
    imageAlt: "Deep Forest",
    category: "WOODY",
    title: "Deep Forest",
    tags: ["시더우드", "패출리"],
    savedAt: "2026. 04. 08",
  },
  {
    id: 4,
    imageSrc: "/images/sample-perfume.png",
    imageAlt: "Fresh Lemon",
    category: "CITRUS",
    title: "Fresh Lemon",
    tags: ["레몬", "머스크"],
    savedAt: "2026. 04. 05",
  },
]
