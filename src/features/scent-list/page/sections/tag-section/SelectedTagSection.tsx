import { Tag } from "@/shared/components"

type SelectedTag = {
  id: number
  name: string
}

type SelectedTagSectionProps = {
  items: SelectedTag[]
  onRemove: (item: SelectedTag) => void
  onClearAll: () => void
}

export const SelectedTagSection = ({
  items,
  onRemove,
  onClearAll,
}: SelectedTagSectionProps) => {
  const hasItems = items.length > 0

  return (
    <section className="border-t border-border pt-md">
      <div className="flex items-center justify-between gap-sm pb-md">
        <p className="text-sm text-text-sub">ACTIVE</p>

        {hasItems && (
          <button
            type="button"
            onClick={onClearAll}
            className="text-sm text-text-sub transition-colors hover:text-text-primary"
          >
            Clear All
          </button>
        )}
      </div>

      {hasItems ? (
        <div className="flex flex-wrap gap-xs">
          {items.map((item) => (
            <Tag
              key={item.id}
              size="sm"
              label={`${item.name} ×`}
              variant="selected"
              onClick={() => onRemove(item)}
            />
          ))}
        </div>
      ) : (
        <p className="text-sm text-text-sub">선택된 태그가 없어요.</p>
      )}
    </section>
  )
}
