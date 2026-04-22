import {
  BackButton,
  Button,
  PageIntro,
  RoundBox,
  Vstack,
} from "@/shared/components"
import { mockReviewData } from "../mocks/review-mock"
import ReviewStarRating from "./review-star-rating/ReviewStatRating"

const Review = () => {
  const { recommendation, feedback } = mockReviewData
  // TODO : 뒤로가기 버튼 결과페이지 연결
  return (
    <Vstack className="gap-lg px-10 py-16">
      <PageIntro
        title="소중한 의견을 들려주세요"
        description="여러분의 소중한 피드백은 추천 서비스의 정확도를 높이는 데 큰 도움이 됩니다."
        backButton={<BackButton />}
      />

      <RoundBox className="border border-border bg-white mt-10" padding="xl">
        <div className="flex items-center gap-md">
          <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-surface-muted">
            <img
              src={recommendation.imageSrc}
              alt={recommendation.imageAlt}
              className="h-full w-full object-cover"
            />
          </div>

          <Vstack gap="none" className="flex min-w-0 flex-1 flex-col">
            <span className="text-xs font-medium tracking-[0.08em] text-text-sub">
              REVIEWING
            </span>
            <h3 className="mt-1 text-lg font-bold text-text-primary">
              {recommendation.name}
            </h3>
            <p className="mt-1 text-sm text-text-secondary">
              {recommendation.scentFamily}
            </p>
          </Vstack>
        </div>
      </RoundBox>

      <RoundBox className="border border-border bg-white" padding="xl">
        <Vstack className="flex flex-col gap-md">
          <p className="text-md font-semibold text-text-primary">
            이 추천 결과가 마음에 드시나요?
          </p>
          <ReviewStarRating />
        </Vstack>
      </RoundBox>

      <RoundBox className="border border-border bg-white" padding="xl">
        <Vstack className="flex flex-col gap-md">
          <p className="text-md font-semibold text-text-primary">
            서비스에 전하고 싶은 피드백을 작성해주세요
          </p>

          <textarea
            className="min-h-36 w-full resize-none rounded-2xl border border-transparent bg-green-input px-md py-md text-sm text-text-primary outline-none transition-colors placeholder:text-text-sub focus:border-primary"
            placeholder="예: 추천 결과는 좋았지만, 향의 분위기를 조금 더 자세히 설명해주면 좋을 것 같아요."
            defaultValue={feedback}
          />
        </Vstack>
      </RoundBox>

      <Button className="mx-auto min-w-32">후기 제출하기</Button>
    </Vstack>
  )
}

export default Review
