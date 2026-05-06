import {
  BackButton,
  Button,
  PageIntro,
  RoundBox,
  Vstack,
} from "@/shared/components"
import { useNavigate, useSearch } from "@tanstack/react-router"
import { useState } from "react"
import { useCreateReviewMutation } from "../hooks/useCreateReviewMutation"
import ReviewStarRating from "./review-star-rating/ReviewStatRating"

export const Review = () => {
  const navigate = useNavigate()

  const search = useSearch({ from: "/_wide/review" }) as {
    resultId?: string | number
    type?: "image" | "chatbot" | "keyword" | "survey"
    name?: string
    engName?: string
    thumbnailUrl?: string
  }

  const resultId = Number(search.resultId)

  const [rating, setRating] = useState(0)
  const [review, setReview] = useState("")

  const { mutate, isPending } = useCreateReviewMutation()

  const handleSubmit = () => {
    if (!search.type) return

    mutate(
      {
        resultId,
        rating,
        review,
        type: search.type,
      },
      {
        onSuccess: () => {
          navigate({ to: "/my-page" })
        },
      }
    )
  }

  return (
    <Vstack className="gap-lg px-10 py-16">
      <PageIntro
        title="소중한 의견을 들려주세요"
        description="여러분의 소중한 피드백은 추천 서비스의 정확도를 높이는 데 큰 도움이 됩니다."
        backButton={
          <BackButton
            onClick={() =>
              navigate({
                to: "/find-scent/result/$resultId",
                params: {
                  resultId: String(resultId),
                },
                search: {
                  type: search.type ?? "image",
                },
              })
            }
          />
        }
      />

      <RoundBox className="mt-10 border border-border bg-white" padding="xl">
        <div className="flex items-center gap-md">
          <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-surface-muted">
            <img
              src={search.thumbnailUrl}
              alt={search.name ?? "추천 향기"}
              className="h-full w-full object-cover"
            />
          </div>

          <Vstack gap="none" className="flex min-w-0 flex-1 flex-col">
            <span className="text-xs font-medium tracking-[0.08em] text-text-sub">
              REVIEWING
            </span>
            <h3 className="mt-1 text-lg font-bold text-text-primary">
              {search.name}
            </h3>
            <p className="mt-1 text-sm text-text-secondary">{search.engName}</p>
          </Vstack>
        </div>
      </RoundBox>

      <RoundBox className="border border-border bg-white" padding="xl">
        <Vstack className="flex flex-col gap-md">
          <p className="text-md font-semibold text-text-primary">
            이 추천 결과가 마음에 드시나요?
          </p>
          <ReviewStarRating value={rating} onChange={setRating} />
        </Vstack>
      </RoundBox>

      <RoundBox className="border border-border bg-white" padding="xl">
        <Vstack className="flex flex-col gap-md">
          <p className="text-md font-semibold text-text-primary">
            서비스에 전하고 싶은 피드백을 작성해주세요
          </p>

          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="min-h-36 w-full resize-none rounded-2xl border border-transparent bg-green-input px-md py-md text-sm text-text-primary outline-none transition-colors placeholder:text-text-sub focus:border-primary"
            placeholder="예: 추천 결과는 좋았지만, 향의 분위기를 조금 더 자세히 설명해주면 좋을 것 같아요."
          />
        </Vstack>
      </RoundBox>

      <Button
        className="mx-auto min-w-32"
        onClick={handleSubmit}
        disabled={isPending || !Number.isFinite(resultId)}
      >
        후기 제출하기
      </Button>
    </Vstack>
  )
}
