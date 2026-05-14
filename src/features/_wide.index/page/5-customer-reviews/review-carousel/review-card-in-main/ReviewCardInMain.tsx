import type { ReviewInMain } from "@/features/_wide.index/types/main.api.type"
import { EmptyImage, Hstack, RoundBox, Vstack } from "@/shared/components"
import { useState } from "react"

type ReviewCardInMainProps = {
  reviewInMain: ReviewInMain
  index: number
}

const ReviewCardInMain = ({ reviewInMain, index }: ReviewCardInMainProps) => {
  const { created_at, name, thumbnail_url, review } = reviewInMain
  const [isImageError, setIsImageError] = useState(false)

  const hasValidImage = thumbnail_url && !isImageError

  return (
    <RoundBox
      style={{
        transform: `translateX(calc((-100% - 16px) * ${index}))`,
        transition: "transform 300ms ease",
      }}
      padding="none"
      className="h-90 w-60 shrink-0 overflow-hidden bg-card shadow-box"
    >
      <Vstack gap="none" className="h-full">
        <div className="flex aspect-square w-full items-center justify-center overflow-hidden bg-surface-default">
          {hasValidImage ? (
            <img
              src={thumbnail_url}
              alt={`${name} 향기 이미지`}
              className="h-full w-full object-cover"
              onError={() => setIsImageError(true)}
            />
          ) : (
            <EmptyImage type="image" size="md" />
          )}
        </div>

        <Vstack className="flex-1 justify-between p-lg">
          <p className="line-clamp-2 font-light">{`"${review}"`}</p>

          <Hstack className="w-full items-center justify-start">
            <p className="grow">{name}</p>
            <p className="text-sm text-text-sub">{created_at.slice(0, 10)}</p>
          </Hstack>
        </Vstack>
      </Vstack>
    </RoundBox>
  )
}

export default ReviewCardInMain
