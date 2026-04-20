import { useMemo, useState } from "react"

import type { ScentCardItem } from "@/features/scent-list/mocks/scent-card.mock"
import type { ScentFilterItem } from "@/features/scent-list/mocks/scent-filter.mock"

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
    if (selectedItems.length === 0) return initialData

    return initialData.filter((card) =>
      selectedItems.every((selected) =>
        card.tags.some(
          (tag) =>
            tag.category === selected.category && tag.name === selected.name
        )
      )
    )
  }, [selectedItems, initialData])

  return {
    selectedItems,
    toggleItem,
    clearAll,
    filteredItems,
  }
}
