import { Star } from "lucide-react"

type ReviewStarRatingProps = {
  value: number
  onChange: (rating: number) => void
}

const ReviewStarRating = ({ value, onChange }: ReviewStarRatingProps) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, index) => {
        const starValue = index + 1
        const isFilled = starValue <= value

        return (
          <button
            key={starValue}
            type="button"
            onClick={() => {
              onChange(starValue)
            }}
            className="flex h-10 w-10 items-center justify-center rounded-full transition-transform hover:scale-105"
            aria-label={`${starValue}점 선택`}
            aria-pressed={isFilled}
          >
            <Star
              className={
                isFilled
                  ? "h-8 w-8 fill-text-highlight text-text-highlight"
                  : "h-8 w-8 text-primary"
              }
            />
          </button>
        )
      })}
    </div>
  )
}

export default ReviewStarRating
