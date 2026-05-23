import SectionVstack from "../section-container/SectionContainer"
import ReviewCarouselSkeleton from "./ReviewCarouselSkeleton"

const CustomerReviewsSkeleton = () => {
  return (
    <SectionVstack>
      <div
        aria-hidden="true"
        className="h-[24px] w-[120px] animate-pulse rounded-sm bg-gray-10"
      />
      <ReviewCarouselSkeleton />
    </SectionVstack>
  )
}

export default CustomerReviewsSkeleton
