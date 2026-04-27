import EmptyStateImage from "@/assets/images/empty-state/empty-scent.svg"
import { useDeleteReview, useReviewList } from "@/features/my-page/hooks"
import { EmptyState, Toast } from "@/shared/components"
import LoadingState from "@/shared/components/loading-state/LoadingState"
import { formatDate } from "@/shared/utils/date"
import { useEffect, useState } from "react"
import { ReviewCard } from "./review-card/ReviewCard"

export const ReviewSection = () => {
  const { data: reviewList = [], error, isLoading } = useReviewList()
  const { mutate: deleteMutate } = useDeleteReview()
  const hasItems = reviewList.length > 0

  const [toast, setToast] = useState<{
    message: string
    variant: "success" | "error"
  } | null>(null)

  useEffect(() => {
    if (!toast) return

    const timer = setTimeout(() => {
      setToast(null)
    }, 3000)

    return () => clearTimeout(timer)
  }, [toast])

  if (isLoading) {
    return <LoadingState />
  }

  if (error) {
    return <div>리뷰를 불러오지 못했어요.</div>
  }

  return (
    <>
      {toast && (
        <div className="fixed left-0 right-0 top-6 z-50 flex justify-center">
          <Toast message={toast.message} variant={toast.variant} />
        </div>
      )}

      <section>
        <h2 className="px-md text-center text-lg font-bold text-text-primary">
          {"내가 쓴 리뷰 "}
          <span className="font-extrabold text-text-highlight">
            {reviewList.length}
          </span>
          개
        </h2>

        {hasItems ? (
          <div className="mt-md flex flex-col gap-md">
            {reviewList.map((item) => (
              <ReviewCard
                key={item.id}
                reviewId={item.id}
                type={item.type}
                title={item.eng_name}
                rating={item.rating}
                content={item.review}
                date={formatDate(item.created_at)}
                onDelete={() =>
                  deleteMutate(
                    {
                      reviewId: item.id,
                      type: item.type,
                    },
                    {
                      onSuccess: () => {
                        setToast({
                          message: "리뷰가 삭제되었습니다.",
                          variant: "success",
                        })
                      },
                      onError: () => {
                        setToast({
                          message: "리뷰 삭제에 실패했습니다.",
                          variant: "error",
                        })
                      },
                    }
                  )
                }
                onEditSuccess={() => {
                  setToast({
                    message: "리뷰가 수정되었습니다.",
                    variant: "success",
                  })
                }}
                onEditError={() => {
                  setToast({
                    message: "리뷰 수정에 실패했습니다.",
                    variant: "error",
                  })
                }}
              />
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
    </>
  )
}
