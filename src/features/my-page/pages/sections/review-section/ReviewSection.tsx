import EmptyStateImage from "@/assets/images/empty-state/empty-scent.svg"
import { mockReviewList } from "@/features/my-page/mocks/review.mock"
import { EmptyState } from "@/shared/components"

import ReviewCard from "./review-card/ReviewCard"

export default function ReviewSection() {
  const hasItems = mockReviewList.length > 0

  return (
    <section>
      <h2 className="px-md text-center text-lg font-bold text-text-primary">
        내가 쓴 리뷰
        <span className="font-extrabold text-text-highlight">
          {mockReviewList.length}
        </span>
        개
      </h2>

      {hasItems ? (
        <div className="mt-md flex flex-col gap-md">
          {mockReviewList.map(({ id, ...item }) => (
            <ReviewCard key={id} {...item} />
          ))}
        </div>
      ) : (
        <div className="mt-2xl flex justify-center">
          <EmptyState
            imageSrc={EmptyStateImage}
            title="작성한 리뷰가 없어요"
            description="추천받은 향기에 대한 리뷰를 남겨보세요"
            className="border-none"
          />
        </div>
      )}
    </section>
  )
}
