import { EmptyImage, Tag } from "@/shared/components"
import type { ScentDetailResponse } from "@/shared/types/scent-types/scent.type"
import { useState } from "react"

type TopCardProps = {
  data: ScentDetailResponse
}

const TopCard = ({ data }: TopCardProps) => {
  const scent = data.data
  const [isImageError, setIsImageError] = useState(false)

  const hasImage = scent.thumbnail_url && !isImageError

  return (
    <div className="flex flex-col items-center justify-center gap-md">
      <div className="mb-md">
        <Tag label={scent.categories} size="sm" variant="outlined" />
      </div>

      {hasImage ? (
        <img
          src={scent.thumbnail_url}
          alt={scent.eng_name}
          className="mb-md aspect-square w-container-sm rounded-xl object-cover"
          onError={() => setIsImageError(true)}
        />
      ) : (
        <div className="mb-md flex aspect-square w-[220px] items-center justify-center">
          <EmptyImage type="image" size="md" />
        </div>
      )}

      <div className="text-xl font-bold">{scent.name}</div>
      <div className="text-sm text-text-sub">{scent.eng_name}</div>

      <div className="mt-md text-center text-text-primary">
        {scent.description}
      </div>

      <div className="m-md flex flex-wrap justify-center gap-md">
        {scent.tags.map((tag) => (
          <Tag key={tag} label={tag} size="sm" variant="soft" />
        ))}
      </div>
    </div>
  )
}

export default TopCard
