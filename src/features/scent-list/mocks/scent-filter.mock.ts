export type ScentFilterCategory = "mood" | "season" | "notes" | "intensity"

export type ScentFilterItem = {
  id: number
  name: string
  category: ScentFilterCategory
}

export type ScentFilterSection = {
  title: string
  category: ScentFilterCategory
  options: ScentFilterItem[]
}

export const scentFilterMockData: ScentFilterSection[] = [
  {
    title: "MOOD",
    category: "mood",
    options: [
      { id: 1, name: "어두운", category: "mood" },
      { id: 2, name: "산뜻한", category: "mood" },
    ],
  },
  {
    title: "SEASON",
    category: "season",
    options: [
      { id: 3, name: "봄", category: "season" },
      { id: 4, name: "여름", category: "season" },
      { id: 5, name: "가을", category: "season" },
      { id: 6, name: "겨울", category: "season" },
    ],
  },
  {
    title: "NOTES",
    category: "notes",
    options: [
      { id: 7, name: "로즈", category: "notes" },
      { id: 8, name: "바닐라", category: "notes" },
      { id: 9, name: "우드", category: "notes" },
      { id: 10, name: "시트러스", category: "notes" },
    ],
  },
  {
    title: "INTENSITY",
    category: "intensity",
    options: [
      { id: 11, name: "약한", category: "intensity" },
      { id: 12, name: "보통", category: "intensity" },
      { id: 13, name: "진한", category: "intensity" },
    ],
  },
]
