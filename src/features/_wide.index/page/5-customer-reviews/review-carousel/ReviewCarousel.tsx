import { makeReviewsInMainQueryOptions } from "@/features/_wide.index/loader/main-loader"
import { Button, Hstack } from "@/shared/components"
import ErrorBox from "@/shared/components/error-box/ErrorBox"
import type { WithButtonProps } from "@/shared/components/inputs/Button/Button"
import type { DefaultButtonProps } from "@/shared/types"
import { useQuery } from "@tanstack/react-query"
import clsx from "clsx"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import ReviewCarouselSkeleton from "../ReviewCarouselSkeleton"
import ReviewCardInMain from "./review-card-in-main/ReviewCardInMain"
import styles from "./ReviewCarousel.module.css"

const RoundButton = (props: DefaultButtonProps & WithButtonProps) => {
  return <Button padding="same" radius="full" style="ghost" {...props} />
}
const ReviewCarousel = () => {
  const [index, setIndex] = useState(0)

  const {
    data: reviewsInMain,
    error,
    refetch,
    isLoading,
  } = useQuery(makeReviewsInMainQueryOptions())

  if (isLoading) {
    return <ReviewCarouselSkeleton />
  }

  if (error) {
    return <ErrorBox refetch={refetch} />
  }

  if (!reviewsInMain || reviewsInMain.length === 0) {
    return null
  }
  return (
    <div className="relative">
      {reviewsInMain.length > 2 && (
        <Hstack gap="sm" className="absolute bottom-full right-0">
          <RoundButton
            onClick={() => setIndex((prev) => Math.max(0, prev - 1))}
          >
            <ChevronLeft />
          </RoundButton>
          <RoundButton
            onClick={() =>
              setIndex((prev) => Math.min(reviewsInMain.length - 2, prev + 1))
            }
          >
            <ChevronRight />
          </RoundButton>
        </Hstack>
      )}

      <Hstack
        className={clsx(
          "justify-start overflow-x-hidden pb-sm -mx-2xl px-2xl",
          styles.review_carousel_mask
        )}
      >
        {reviewsInMain.map((review) => (
          <ReviewCardInMain
            key={`${review.type}_${review.id}`}
            reviewInMain={review}
            index={index}
          />
        ))}
      </Hstack>
    </div>
  )
}

export default ReviewCarousel
