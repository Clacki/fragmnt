import Tag from "../tag/Tag"

type ArchiveCardProps = {
  imageSrc: string
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

  return (
    <article className="flex w-full flex-col gap-sm rounded-lg border border-border bg-card p-md shadow-box">
      <div className="h-[200px] w-full overflow-hidden rounded-md">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-cover"
        />
      </div>
      <ul className="flex gap-xs">
        {visibleTags.map((tag, index) => (
          <li key={`${tag}-${index}`}>
            <Tag label={tag} variant="soft" size="sm" />
          </li>
        ))}
      </ul>
      <div className="flex min-w-0 flex-col gap-xs">
        <h2 className="truncate text-lg font-bold text-text-primary">
          {title}
        </h2>
        <p className="line-clamp-2 text-sm text-text-sub">{description}</p>
      </div>
    </article>
  )
}

export default ArchiveCard
