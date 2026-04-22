import cn from "@/lib/utils"
import { Tag } from "@/shared/components/tag"

type NoteSectionCardProps = {
  labelEn: string
  labelKo: string
  description: string
  tags: string[]
  size?: "sm" | "md"
  className?: string
}

const sizeStyles = {
  sm: "text-md font-bold",
  md: "text-md font-bold",
}

const commonStyles = {
  labelEn: "text-sm",
  desc: "text-sm",
  gap: "mt-xs",
}

export default function NoteSectionCard({
  labelEn,
  labelKo,
  description,
  tags,
  size = "md",
  className,
}: NoteSectionCardProps) {
  const s = {
    title: sizeStyles[size],
    ...commonStyles,
  }

  return (
    <section className={cn("min-w-0", className)}>
      {size === "md" && (
        <p
          className={cn("font-medium uppercase text-text-highlight", s.labelEn)}
        >
          {labelEn}
        </p>
      )}

      <h3 className={cn("font-bold text-text-highlight", s.title)}>
        {labelKo}
      </h3>

      <p className={cn("text-text-sub", s.desc)}>{description}</p>

      <div className={cn("flex flex-wrap gap-xs", s.gap)}>
        {tags.map((tag) => (
          <Tag key={tag} label={tag} size="sm" variant="subtle" />
        ))}
      </div>
    </section>
  )
}
