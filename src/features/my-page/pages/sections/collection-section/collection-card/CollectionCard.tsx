import { EmptyImage, Tag } from "@/shared/components"
import { Trash2 } from "lucide-react"
import { useState } from "react"

type CollectionCardProps = {
  imageSrc?: string
  imageAlt?: string
  category: string
  title: string
  tags?: string[]
  date: string
  onDelete?: () => void
  onClick?: () => void
}

const CollectionCard = ({
  imageSrc,
  imageAlt = "collection image",
  category,
  title,
  tags = [],
  date,
  onDelete,
  onClick,
}: CollectionCardProps) => {
  const [isError, setIsError] = useState(false)

  return (
    <article
      onClick={onClick}
      role="button"
      tabIndex={0}
      className="flex h-[440px] w-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-shadow duration-200 hover:shadow-md"
    >
      <div className="flex items-center justify-center h-[315px] w-full overflow-hidden">
        {imageSrc && !isError ? (
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover bg-surface-default"
            onError={() => setIsError(true)}
          />
        ) : (
          <EmptyImage type="image" size="md" />
        )}
      </div>
      <div className="flex flex-1 flex-col justify-between p-lg">
        <div className="flex justify-between">
          <div>
            <p className="text-sm font-light text-text-sub">{category}</p>
            <h3 className="text-[20px] font-bold">{title}</h3>
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onDelete?.()
            }}
            aria-label={`${title} 삭제`}
            className="cursor-pointer text-text-sub transition-colors hover:text-primary-hover"
          >
            <Trash2 className="text-current" />
          </button>
        </div>
        <div className="flex justify-between items-end">
          <ul className="flex gap-sm flex-wrap">
            {tags.map((tag, index) => (
              <li key={`${tag}-${index}`}>
                <Tag label={tag} size="sm" variant="subtle" />
              </li>
            ))}
          </ul>
          <p className="text-sm font-light text-text-sub">{date}</p>
        </div>
      </div>
    </article>
  )
}

export default CollectionCard
