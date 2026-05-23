import { Hstack, RoundBox, Vstack } from "@/shared/components"
import clsx from "clsx"
import styles from "./review-carousel/ReviewCarousel.module.css"

const SkeletonBlock = ({ className }: { className: string }) => {
  return (
    <div
      aria-hidden="true"
      className={`animate-pulse rounded-sm bg-gray-10 ${className}`}
    />
  )
}

const ReviewCardSkeleton = () => {
  return (
    <RoundBox
      padding="none"
      className="h-90 w-60 shrink-0 overflow-hidden bg-card shadow-box"
    >
      <Vstack gap="none" className="h-full">
        <SkeletonBlock className="aspect-square w-full rounded-none" />

        <Vstack className="flex-1 justify-between p-lg">
          <Vstack gap="sm">
            <SkeletonBlock className="h-[23px] w-full" />
            <SkeletonBlock className="h-[23px] w-3/4" />
          </Vstack>

          <Hstack className="w-full items-center justify-start">
            <SkeletonBlock className="h-[23px] w-[64px]" />
            <SkeletonBlock className="ml-auto h-[18px] w-[76px]" />
          </Hstack>
        </Vstack>
      </Vstack>
    </RoundBox>
  )
}

const ReviewCarouselSkeleton = () => {
  return (
    <div className="relative">
      <Hstack
        className={clsx(
          "justify-start overflow-x-hidden pb-sm -mx-2xl px-2xl",
          styles.review_carousel_mask
        )}
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <ReviewCardSkeleton key={index} />
        ))}
      </Hstack>
    </div>
  )
}

export default ReviewCarouselSkeleton
