import { Star } from "lucide-react"

import { cn } from "@/lib/utils"

type ReviewCardProps = {
  title: string
  rating: number
  content: string
  date: string
  onEdit?: () => void
  onDelete?: () => void
  className?: string
}

export default function ReviewCard({
  title,
  rating,
  content,
  date,
  onEdit,
  onDelete,
  className,
}: ReviewCardProps) {
  const safeRating = Math.max(0, Math.min(5, rating))

  return (
    <article
      className={cn(
        "w-full rounded-lg border border-border bg-white p-lg",
        className
      )}
    >
      <div className="flex items-start justify-between gap-sm">
        <h3 className="text-lg font-bold text-text-primary">{title}</h3>

        <div className="flex shrink-0 items-center gap-2 text-sm text-disabled">
          {/* disabled buttons */}
          <button
            type="button"
            onClick={onEdit}
            disabled={!onEdit}
            className="transition-opacity hover:opacity-70 disabled:opacity-40"
          >
            수정
          </button>
          <button
            type="button"
            onClick={onDelete}
            disabled={!onDelete}
            className="transition-opacity hover:opacity-70 disabled:opacity-40"
          >
            삭제
          </button>
        </div>
      </div>

      <div
        className="mt-xs flex items-center gap-1"
        aria-label={`별점 ${safeRating}점 / 5점`}
      >
        {Array.from({ length: 5 }).map((_, index) => {
          const filled = index < safeRating

          return (
            <Star
              key={index}
              size={18}
              strokeWidth={1.8}
              className={cn("text-text-primary", filled && "fill-primary")}
            />
          )
        })}
      </div>

      <div className="mt-md">
        <p className="whitespace-pre-line text-md break-words text-base leading-5 font-medium text-text-sub">
          {content}
        </p>

        <div className="flex justify-end">
          <span className="text-sm text-text-sub">{date}</span>
        </div>
      </div>
    </article>
  )
}
