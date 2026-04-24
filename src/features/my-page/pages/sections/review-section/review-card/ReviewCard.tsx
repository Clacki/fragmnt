import { Star } from "lucide-react"

import { useEditReviewMutation } from "@/features/my-page/hooks"
import { cn } from "@/lib/utils"
import { useState } from "react"

export type ReviewCardProps = {
  reviewId: number
  title: string
  rating: number
  content: string
  date: string
  onDelete?: () => void
  className?: string
}

export const ReviewCard = ({
  reviewId,
  title,
  rating,
  content,
  date,
  onDelete,
  className,
}: ReviewCardProps) => {
  const safeRating = Math.max(0, Math.min(5, rating))
  const [editedContent, setEditedContent] = useState(content)
  const [isEditing, setIsEditing] = useState(false)
  const { mutate: editReview, isPending } = useEditReviewMutation()
  const handleSubmit = () => {
    editReview(
      {
        reviewId,
        content: editedContent,
      },
      {
        onSuccess: () => {
          setIsEditing(false)
        },
      }
    )
  }

  return (
    <article
      className={cn(
        "w-full rounded-lg border border-border bg-white p-lg",
        className
      )}
    >
      <div className="flex items-start justify-between gap-sm">
        <h3 className="pt-sm text-lg font-bold text-text-primary">{title}</h3>

        <div className="flex shrink-0 items-center gap-2 text-sm text-disabled">
          {!isEditing ? (
            <>
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="transition-opacity hover:opacity-70"
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
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isPending}
                className="transition-opacity hover:opacity-70 disabled:opacity-40"
              >
                수정 완료
              </button>
              <button
                type="button"
                onClick={() => {
                  setEditedContent(content)
                  setIsEditing(false)
                }}
                disabled={isPending}
                className="transition-opacity hover:opacity-70 disabled:opacity-40"
              >
                취소
              </button>
            </>
          )}
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
              size={16}
              strokeWidth={1.8}
              className={cn("text-text-primary", filled && "fill-primary")}
            />
          )
        })}
      </div>

      <div className="mt-md">
        {!isEditing ? (
          <p className="whitespace-pre-line break-words text-base font-medium leading-5 text-text-sub">
            {content}
          </p>
        ) : (
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            className="min-h-24 w-full rounded-md border border-border px-md py-sm"
          />
        )}

        <div className="flex justify-end">
          <span className="text-sm text-text-sub">{date}</span>
        </div>
      </div>
    </article>
  )
}
