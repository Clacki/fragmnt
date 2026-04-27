import { cn } from "@/lib/utils"
import { Button, EmptyImage, Tag } from "@/shared/components"
import { Bookmark, RotateCcw } from "lucide-react"

type ResultTopCardProps = {
  imageSrc: string
  imageAlt?: string
  category: string
  matchRate?: number
  title: string
  description: string
  tags: string[]
  onDetailClick?: () => void
  onAddCollectionClick?: () => void
  onRetryClick?: () => void
  className?: string
}

const ResultTopCard = ({
  imageSrc,
  imageAlt = "추천 향 이미지",
  category,
  matchRate,
  title,
  description,
  tags,
  className = "",
}: ResultTopCardProps) => {
  return (
    <section
      className={cn(
        "w-full rounded-lg border border-border bg-white p-sm shadow-sm my-xl",
        className
      )}
    >
      <div className="flex flex-col gap-6 flex-row m-lg">
        {/* 이미지 영역 */}
        <div className="shrink-0 w-1/3">
          <div className="aspect-3/4 overflow-hidden rounded-lg bg-surface-sub">
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={imageAlt}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <EmptyImage type="image" size="md" />
              </div>
            )}
          </div>
        </div>

        {/* 텍스트 영역 */}
        <div className="flex min-w-0 flex-1 flex-col">
          {/* 상단 라벨 */}
          <div className="mb-sm flex items-start justify-between gap-4">
            <span className="text-md font-medium uppercase text-text-sub">
              {category}
            </span>

            <span className="inline-flex h-8 items-center rounded-full bg-primary px-4 text-sm font-medium text-white">
              {matchRate}% Match
            </span>
          </div>

          {/* 제목 */}
          <h2 className="mb-md text-xl font-semibold text-text-primary">
            {title}
          </h2>

          {/* 설명 */}
          <p className="mb-md max-w-full whitespace-pre-line break-keep text-md text-text-description">
            {description}
          </p>

          {/* 태그 */}
          <div className="mb-xl flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Tag key={tag} label={tag} size="sm" variant="soft" />
            ))}
          </div>

          {/* 버튼 */}
          <div className="flex flex-wrap gap-3">
            <Button size="sm">자세히 보기 ↗</Button>
            <div className="flex flex-wrap gap-3">
              <Button size="sm" style="outlined">
                내 컬렉션에 추가하기
                <Bookmark size={20} />
              </Button>
              <Button size="sm" style="outlined">
                다시 추천받기
                <RotateCcw size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResultTopCard
