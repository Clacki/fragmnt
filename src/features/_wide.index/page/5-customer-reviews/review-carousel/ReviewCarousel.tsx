import { makeReviewsInMainQueryOptions } from "@/features/_wide.index/loader/main-loader"
import { Button, Hstack } from "@/shared/components"
import ErrorBox from "@/shared/components/error-box/ErrorBox"
import type { WithButtonProps } from "@/shared/components/inputs/Button/Button"
import type { DefaultButtonProps } from "@/shared/types"
import { useQuery } from "@tanstack/react-query"
import { useLoaderData } from "@tanstack/react-router"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import ReviewCardInMain from "./review-card-in-main/ReviewCardInMain"

const RoundButton = (props: DefaultButtonProps & WithButtonProps) => {
  return <Button padding="same" radius="full" style="ghost" {...props} />
}

const ReviewCarousel = () => {
  const [index, setIndex] = useState(0)

  const { data: loaderData, error: loaderError } = useLoaderData({
    from: "/_wide/",
  })

  const {
    data: queryData,
    error: queryError,
    refetch,
  } = useQuery(makeReviewsInMainQueryOptions())

  const reviewsInMain = queryData ?? loaderData
  const error = queryError ?? loaderError

  if (error) return <ErrorBox refetch={refetch} />
  if (!reviewsInMain) throw new Error("---- UNREACHABLE")

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

      <Hstack className="justify-start overflow-x-hidden pb-sm">
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
