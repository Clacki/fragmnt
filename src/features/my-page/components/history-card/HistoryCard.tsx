import { CalendarDays, ChevronRight } from "lucide-react"
import { useState } from "react"

import type { HistoryCardProps } from "@/features/my-page/types"
import { cn } from "@/lib/utils"
import { Empty } from "@/shared/components"

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
        "flex w-full items-center gap-4 rounded-md border border-primary bg-white px-md py-md text-left shadow-md transition-all",
        "hover:bg-gray-5 hover:shadow-lg",
        className
      )}
    >
      <div className="flex w-1/4 aspect-square shrink-0 items-center justify-center overflow-hidden rounded-lg bg-disabled">
        {imageSrc && !isError ? (
          <img
            src={imageSrc}
            alt={imageAlt}
            className="block h-full w-full object-cover"
            onError={() => setIsError(true)}
          />
        ) : (
          <Empty type="image" size="sm" className="rounded-lg" />
        )}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex min-w-0 items-center gap-2">
          <h3 className="min-w-0 truncate text-lg font-bold leading-none text-text-primary">
            {title}
          </h3>

          {badgeText && (
            <span className="inline-flex h-6 shrink-0 items-center rounded-full bg-badge px-2 text-sm font-semibold text-text-description">
              {badgeText}
            </span>
          )}
        </div>

        {!!tags.length && (
          <div className="mt-2 flex overflow-hidden gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex h-10 items-center rounded-md border border-border px-lg text-md text-text-sub whitespace-nowrap"
              >
                {tag}
              </span>
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
