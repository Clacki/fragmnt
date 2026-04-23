import { Tag } from "@/shared/components"

type TagOption = {
  id: number
  name: string
}

type TagGroupSectionProps = {
  title: string
  options: TagOption[]
  selectedIds: number[]
  onToggle: (option: TagOption) => void
}

export const TagGroupSection = ({
  title,
  options,
  selectedIds,
  onToggle,
}: TagGroupSectionProps) => {
  return (
    <section className="flex flex-col gap-sm pb-lg">
      <h4 className="text-sm font-semibold text-text-sub">{title}</h4>

      <div className="flex flex-wrap gap-xs">
        {options.map((option) => {
          const isSelected = selectedIds.includes(option.id)

          return (
            <Tag
              key={option.id}
              size="sm"
              label={option.name}
              variant={isSelected ? "selected" : "subtle"}
              onClick={() => onToggle(option)}
            />
          )
        })}
      </div>
    </section>
  )
}
