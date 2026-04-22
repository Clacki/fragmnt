import { Star } from "lucide-react"
import { useState } from "react"

const ReviewStarRating = () => {
  const [rating, setRating] = useState(0)

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, index) => {
        const starValue = index + 1
        const isFilled = starValue <= rating

        return (
          <button
            key={starValue}
            type="button"
            onClick={() => {
              setRating(starValue)
            }}
            className="flex h-10 w-10 items-center justify-center rounded-full transition-transform hover:scale-105"
            aria-label={`${starValue}점 선택`}
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
