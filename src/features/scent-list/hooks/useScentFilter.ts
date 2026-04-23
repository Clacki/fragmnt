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

    return safeData.filter((card) =>
      selectedItems.every((selected) => {
        if (selected.category === "category") {
          return card.category === selected.name
        }

        if (selected.category === "season") {
          return card.season.includes(selected.name as ScentSeason)
        }

        if (selected.category === "intensity") {
          return getIntensityLabel(card.intensity) === selected.name
        }

        return true
      })
    )
  }, [selectedItems, initialData])

  return {
    selectedItems,
    toggleItem,
    clearAll,
    filteredItems,
  }
}
