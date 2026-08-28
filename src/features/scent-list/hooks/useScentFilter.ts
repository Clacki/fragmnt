import { useMemo, useState } from "react"

import type { ScentFilterItem } from "@/shared/constants/scent-filter"
import type { ScentCardItem, ScentSeason } from "../types/scent-card.type"
import { getIntensityLabel } from "../utils/getIntensityLabel"

export const useScentFilter = (initialData: ScentCardItem[]) => {
  const [selectedItems, setSelectedItems] = useState<ScentFilterItem[]>([])

  const toggleItem = (item: ScentFilterItem) => {
    setSelectedItems((prev) => {
      const isSelected = prev.some((v) => v.id === item.id)

      if (isSelected) {
        return prev.filter((v) => v.id !== item.id)
      }

      return [...prev, item]
    })
  }

  const clearAll = () => {
    setSelectedItems([])
  }

  const filteredItems = useMemo(() => {
    const safeData = Array.isArray(initialData) ? initialData : []

    if (selectedItems.length === 0) return safeData

    const selectedCategories = selectedItems.filter(
      (item) => item.category === "category"
    )
    const selectedSeasons = selectedItems.filter(
      (item) => item.category === "season"
    )
    const selectedIntensities = selectedItems.filter(
      (item) => item.category === "intensity"
    )

    return safeData.filter((card) => {
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.some((selected) => card.category === selected.name)
      const matchesSeason =
        selectedSeasons.length === 0 ||
        selectedSeasons.some((selected) =>
          card.season.includes(selected.name as ScentSeason)
        )
      const matchesIntensity =
        selectedIntensities.length === 0 ||
        selectedIntensities.some(
          (selected) => getIntensityLabel(card.intensity) === selected.name
        )

      return matchesCategory && matchesSeason && matchesIntensity
    })
  }, [selectedItems, initialData])

  return {
    selectedItems,
    toggleItem,
    clearAll,
    filteredItems,
  }
}
