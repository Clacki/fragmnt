export type ScentFilterCategory = "category" | "season" | "intensity"

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

export const scentFilterData: ScentFilterSection[] = [
  {
    title: "CATEGORY",
    category: "category",
    options: [
      { id: 1, name: "floral", category: "category" },
      { id: 2, name: "woody", category: "category" },
      { id: 3, name: "citrus", category: "category" },
      { id: 4, name: "musk", category: "category" },
      { id: 5, name: "green", category: "category" },
      { id: 6, name: "powdery", category: "category" },
      { id: 7, name: "spicy", category: "category" },
      { id: 8, name: "aquatic", category: "category" },
      { id: 9, name: "fruity", category: "category" },
      { id: 10, name: "amber", category: "category" },
    ],
  },
  {
    title: "SEASON",
    category: "season",
    options: [
      { id: 11, name: "spring", category: "season" },
      { id: 12, name: "summer", category: "season" },
      { id: 13, name: "autumn", category: "season" },
      { id: 14, name: "winter", category: "season" },
    ],
  },
  {
    title: "INTENSITY",
    category: "intensity",
    options: [
      { id: 15, name: "약함", category: "intensity" },
      { id: 16, name: "보통", category: "intensity" },
      { id: 17, name: "강함", category: "intensity" },
    ],
  },
]
