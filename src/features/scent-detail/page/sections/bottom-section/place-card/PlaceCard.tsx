import { cn } from "@/lib/utils"
import { EmptyImage, Tag } from "@/shared/components"
import { useState } from "react"

type PlaceCardProps = {
  imageSrc: string
  imageAlt?: string
  title: string
  description: string
  matchRate?: number
}

export default function PlaceCard({
  imageSrc,
  imageAlt = "place image",
  title,
  description,
  matchRate,
}: PlaceCardProps) {
  const [isError, setIsError] = useState(false)

  return (
    <div
      className={cn(
        "relative block w-full aspect-video overflow-hidden rounded-lg text-left"
      )}
    >
      <div className="absolute inset-0">
        {imageSrc && !isError ? (
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-full w-full object-cover"
            onError={() => setIsError(true)}
          />
        ) : (
          <EmptyImage type="image" size="sm" className="h-full w-full" />
        )}
      </div>

      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

      {typeof matchRate === "number" && (
        <div className="absolute right-md top-md">
          <Tag label={`${matchRate}% MATCH`} size="sm" variant="subtle" />
        </div>
      )}

      <div className="absolute bottom-lg left-lg right-lg">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="text-sm text-white/85 line-clamp-2">{description}</p>
      </div>
    </div>
  )
}
