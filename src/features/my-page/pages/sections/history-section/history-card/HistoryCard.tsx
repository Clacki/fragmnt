import { CalendarDays, ChevronRight } from "lucide-react"
import { useState } from "react"

import type { HistoryCardProps } from "@/features/my-page/types"
import { cn } from "@/lib/utils"
import { EmptyImage, Tag } from "@/shared/components"

const HistoryCard = ({
  imageSrc,
  imageAlt = "history image",
  title,
  badgeText = "챗봇 추천",
  tags = [],
  date,
  onClick,
  className,
}: HistoryCardProps) => {
  const [isError, setIsError] = useState(false)

  return (
    // 추후 공통 Button 컴포넌트로 대체 예정
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex w-full min-h-[96px] items-center gap-3 rounded-md border border-primary bg-white px-md py-md text-left shadow-md transition-all sm:min-h-[120px] sm:gap-4",
        "hover:bg-gray-5 hover:shadow-lg",
        className
      )}
    >
      <div className="flex size-18 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-disabled sm:size-25">
        {imageSrc && !isError ? (
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-full w-full object-cover"
            onError={() => setIsError(true)}
          />
        ) : (
          <EmptyImage type="image" size="sm" className="rounded-lg" />
        )}
      </div>

      <div className="flex-1 min-w-0 gap-md">
        <div className="flex min-w-0 flex-col items-start gap-xs sm:flex-row sm:items-center sm:gap-sm">
          <h3 className="min-w-0 truncate text-md font-bold leading-none text-text-primary sm:text-lg">
            {title}
          </h3>

          {badgeText && (
            <span className="inline-flex h-6 shrink-0 items-center rounded-full bg-badge px-2 text-sm font-semibold text-text-description whitespace-nowrap">
              {badgeText}
            </span>
          )}
        </div>

        {!!tags.length && (
          <div className="mt-lg flex overflow-hidden gap-xs">
            {tags.map((tag) => (
              <Tag key={tag} label={tag} size="sm" variant="outlined" />
            ))}
          </div>
        )}
      </div>

      <div className="flex shrink-0 flex-col items-end justify-between self-stretch">
        <ChevronRight size={18} className="text-text-sub" strokeWidth={2} />

        <div className="flex items-center gap-1 text-sm text-text-sub">
          <CalendarDays size={12} strokeWidth={2} />
          <span className="pt-1">{date}</span>
        </div>
      </div>
    </button>
  )
}

export default HistoryCard
