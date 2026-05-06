import { cn } from "@/lib/utils"
import { Button, Container, EmptyImage, Tag, Vstack } from "@/shared/components"
import { Heart, RotateCcw, Share2 } from "lucide-react"

type ResultTopCardProps = {
  imageSrc: string
  imageAlt?: string
  category: string
  matchRate?: number
  title: string
  engName?: string
  description: string
  tags: string[]
  isSaved: boolean
  isSavePending?: boolean
  isSharePending?: boolean
  onDetailClick?: () => void
  onAddCollectionClick?: () => void
  onRetryClick?: () => void
  onShareClick?: () => void
  className?: string
}

const ResultTopCard = ({
  imageSrc,
  imageAlt = "추천 향 이미지",
  category,
  matchRate = 0,
  title,
  engName,
  description,
  tags,
  isSaved,
  isSavePending = false,
  isSharePending = false,
  onDetailClick,
  onAddCollectionClick,
  onRetryClick,
  onShareClick,
  className = "",
}: ResultTopCardProps) => {
  return (
    <Container>
      <Vstack>
        <section
          aria-labelledby="recommended-scent-title"
          className={cn("mx-auto my-xl w-full max-w-[768px]", className)}
        >
          <article>
            <figure className="relative overflow-hidden rounded-xl bg-surface-sub">
              <div className="aspect-[3/2] w-full overflow-hidden">
                {imageSrc ? (
                  <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <EmptyImage type="image" size="md" />
                  </div>
                )}
              </div>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-default via-white/20 to-transparent" />

              <span className="absolute right-md top-md rounded-full bg-surface-default/90 px-sm py-xs text-sm md:text-md font-bold text-primary shadow-sm">
                {matchRate}% Match
              </span>

              <figcaption className=" absolute inset-x-lg bottom-sm md:bottom-xl">
                <div className="mt-md hidden md:flex flex-wrap gap-xs">
                  <Tag label={category} size="sm" variant="selected" />
                  {tags.map((tag, index) => (
                    <Tag
                      key={`${tag}-${index}`}
                      label={tag}
                      size="sm"
                      variant="soft"
                    />
                  ))}
                </div>
                <h2
                  id="recommended-scent-title"
                  className="truncate text-xl font-semibold text-text-primary md:text-2xl"
                >
                  {engName ?? title}
                </h2>
                <p className="md:mt-sm truncate text-sm text-text-description md:max-w-[560px] md:whitespace-normal md:break-keep md:text-md">
                  {description}
                </p>
              </figcaption>
            </figure>

            <div className="mt-xl flex gap-sm md:gap-md">
              <Button type="button" className="w-full" onClick={onDetailClick}>
                자세히 보기
              </Button>

              <Button
                type="button"
                style="outlined"
                disabled={isSavePending}
                aria-label={
                  isSaved ? "내 컬렉션에서 제거하기" : "내 컬렉션에 추가하기"
                }
                onClick={onAddCollectionClick}
              >
                <Heart size={20} fill={isSaved ? "currentColor" : "none"} />
              </Button>

              <Button
                type="button"
                style="outlined"
                onClick={onShareClick}
                disabled={isSharePending}
              >
                <Share2 size={18} />
              </Button>
            </div>

            <div className="bg-green-input md:bg-surface-default mt-sm md:mt-xl flex h-10 items-center justify-center cursor-pointer rounded-xl hover:bg-green-input">
              <button
                type="button"
                className="mt-xs inline-flex items-center gap-xs text-md font-medium text-primary underline-offset-4  cursor-pointer"
                onClick={onRetryClick}
              >
                <RotateCcw size={16} />
                다시 추천받기
              </button>
            </div>
          </article>
        </section>
      </Vstack>
    </Container>
  )
}

export default ResultTopCard
