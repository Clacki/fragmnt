import type { ScentFilterCategory } from "./scent-filter.mock"

export type ScentCardItem = {
  id: number
  name: string
  description: string
  imageUrl: string
  tags: {
    category: ScentFilterCategory
    name: string
  }[]
}

export const scentCardMockData: ScentCardItem[] = [
  {
    id: 1,
    name: "Blossom Dream",
    description: "로즈와 바닐라가 어우러진 부드럽고 포근한 향입니다.",
    imageUrl: "",
    tags: [
      { category: "mood", name: "어두운" },
      { category: "season", name: "겨울" },
      { category: "notes", name: "바닐라" },
      { category: "intensity", name: "보통" },
    ],
  },
  {
    id: 2,
    name: "Fresh Bloom",
    description: "시트러스의 생기와 산뜻한 플로럴 무드가 돋보이는 향입니다.",
    imageUrl: "",
    tags: [
      { category: "mood", name: "산뜻한" },
      { category: "season", name: "봄" },
      { category: "notes", name: "시트러스" },
      { category: "intensity", name: "약한" },
    ],
  },
  {
    id: 3,
    name: "Wood Silence",
    description: "우드 중심의 차분하고 깊이 있는 무드를 담은 향입니다.",
    imageUrl: "",
    tags: [
      { category: "mood", name: "어두운" },
      { category: "season", name: "가을" },
      { category: "notes", name: "우드" },
      { category: "intensity", name: "진한" },
    ],
  },
  {
    id: 4,
    name: "Rose Dawn",
    description: "깨끗한 로즈 노트와 은은한 잔향이 조화로운 향입니다.",
    imageUrl: "",
    tags: [
      { category: "mood", name: "산뜻한" },
      { category: "season", name: "여름" },
      { category: "notes", name: "로즈" },
      { category: "intensity", name: "보통" },
    ],
  },
  {
    id: 5,
    name: "Velvet Night",
    description: "바닐라와 우드가 만나 묵직하고 따뜻한 분위기를 연출합니다.",
    imageUrl: "",
    tags: [
      { category: "mood", name: "어두운" },
      { category: "season", name: "겨울" },
      { category: "notes", name: "우드" },
      { category: "intensity", name: "진한" },
    ],
  },
  {
    id: 6,
    name: "Citrus Veil",
    description: "가볍고 맑은 시트러스 계열로 데일리하게 쓰기 좋은 향입니다.",
    imageUrl: "",
    tags: [
      { category: "mood", name: "산뜻한" },
      { category: "season", name: "여름" },
      { category: "notes", name: "시트러스" },
      { category: "intensity", name: "약한" },
    ],
  },
]
