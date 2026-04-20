import { EmptyImage } from "@/shared/components"
import { useState } from "react"
import Tag from "../tag/Tag"

type ArchiveCardProps = {
  imageSrc?: string
  imageAlt: string
  tags: string[]
  title: string
  description: string
}

const ArchiveCard = ({
  imageSrc,
  imageAlt,
  tags,
  title,
  description,
}: ArchiveCardProps) => {
  const visibleTags = tags.slice(0, 2)

  const [isError, setIsError] = useState(false)

  return (
    <article className="flex w-full flex-col gap-xs rounded-lg border border-border bg-card p-lg shadow-box hover:shadow-hover hover:bg-gray-5 transition">
      <div className="h-[200px] w-full overflow-hidden rounded-md flex items-center justify-center">
        {imageSrc && !isError ? (
          <img
            src={imageSrc}
            alt={imageAlt}
            onError={() => setIsError(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <EmptyImage size="sm" />
        )}
      </div>

      <ul className="flex gap-xs">
        {visibleTags.map((tag, index) => (
          <li key={`${tag}-${index}`}>
            <Tag label={tag} variant="soft" size="sm" />
          </li>
        ))}
      </ul>

      <div className="flex min-w-0 flex-col">
        <h2 className="truncate text-lg font-bold text-text-primary">
          {title}
        </h2>
        <p className="line-clamp-2 text-sm text-text-sub">{description}</p>
      </div>
    </article>
  )
}

export default ArchiveCard
