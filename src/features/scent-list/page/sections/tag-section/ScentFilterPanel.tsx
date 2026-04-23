import { Funnel } from "lucide-react"

import {
  scentFilterData,
  type ScentFilterItem,
} from "@/shared/constants/scent-filter"
import { SelectedTagSection } from "./SelectedTagSection"
import { TagGroupSection } from "./TagGroupSection"

type ScentFilterPanelProps = {
  selectedItems: ScentFilterItem[]
  onToggleItem: (item: ScentFilterItem) => void
  onClearAll: () => void
  totalCount: number
}

export const ScentFilterPanel = ({
  selectedItems,
  onToggleItem,
  onClearAll,
  totalCount,
}: ScentFilterPanelProps) => {
  const selectedIds = selectedItems.map((item) => item.id)

  return (
    <section className="w-full rounded-2xl bg-white p-xl shadow-sm">
      <div className="flex items-center gap-xs pb-xl">
        <Funnel size={16} className="text-primary" />
        <p className="text-sm font-semibold text-text-sub">EXPLORE BY</p>
      </div>

      <div className="grid grid-cols-2 gap-x-xl gap-y-xl">
        {scentFilterData.map((section) => (
          <TagGroupSection
            key={section.category}
            title={section.title}
            options={section.options}
            selectedIds={selectedIds}
            onToggle={(option) => {
              const selectedItem = section.options.find(
                (item) => item.id === option.id
              )

              if (selectedItem) {
                onToggleItem(selectedItem)
              }
            }}
          />
        ))}
      </div>

      <div className="pt-xl">
        <SelectedTagSection
          items={selectedItems}
          onRemove={(item) => {
            const selectedItem = selectedItems.find(
              (selected) => selected.id === item.id
            )

            if (selectedItem) {
              onToggleItem(selectedItem)
            }
          }}
          onClearAll={onClearAll}
        />
        {selectedItems.length > 0 && (
          <span className="text-sm font-medium text-primary">
            Total: {totalCount} scents
          </span>
        )}
      </div>
    </section>
  )
}
