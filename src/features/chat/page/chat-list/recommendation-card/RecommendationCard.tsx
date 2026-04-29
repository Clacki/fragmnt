import { Button, Hstack, RoundBox, Tag, Vstack } from "@/shared/components"
import EmptyImage from "@/shared/components/empty-image/EmptyImage"
import { useSaveAnalysisFeedbackMutation } from "@/shared/hooks/useSaveAnalysisFeedback"
import { useNavigate } from "@tanstack/react-router"
import { useState } from "react"
import type { RecommendationCardData } from "../../../types/message.types"
import RecommendationActionButton from "./recommendation-button/RecommendationActionButton"

type RecommendationCardProps = RecommendationCardData & {
  onRetry: () => void
  isRetrying: boolean
}

const RecommendationCard = ({
  recommendationId,
  imageSrc,
  imageAlt,
  name,
  englishName,
  description,
  tags,
  onRetry,
  isRetrying,
}: RecommendationCardProps) => {
  const navigate = useNavigate()
  const hasImage = Boolean(imageSrc)
  const [isSaved, setIsSaved] = useState(false)

  const { mutate: saveAnalysisFeedbackMutate, isPending: isSaving } =
    useSaveAnalysisFeedbackMutation()

  const handleClickDetail = () => {
    navigate({
      to: "/find-scent/result/$resultId",
      params: {
        resultId: String(recommendationId),
      },
      search: {
        type: "chatbot",
      },
    })
  }
  const handleClickSave = () => {
    if (isSaved) {
      return
    }

    saveAnalysisFeedbackMutate(
      {
        id: recommendationId,
        status: true,
        type: "chatbot",
      },
      {
        onSuccess: () => {
          setIsSaved(true)
        },
      }
    )
  }

  return (
    <RoundBox
      className="ml-10 border border-border message-enter w-full max-w-[440px] bg-white"
      padding="none"
    >
      <Vstack gap="none">
        <div className="h-60 w-full overflow-hidden rounded-t-xl flex items-center justify-center">
          {hasImage ? (
            <img
              className="h-full w-full object-cover"
              src={imageSrc}
              alt={imageAlt}
            />
          ) : (
            <EmptyImage />
          )}
        </div>

        <section className="flex flex-col gap-sm p-lg">
          <div className="flex flex-col gap-xs">
            <h2 className="text-lg font-bold">{name}</h2>
            <p className="font-light">{englishName}</p>
            <p className="text-text-sub">{description}</p>
          </div>

          <ul className="flex flex-wrap gap-sm">
            {tags.map((tag) => (
              <li key={tag}>
                <Tag label={tag} />
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-md">
            <Button className="w-full" onClick={handleClickDetail}>
              추천 결과 자세히 보기
            </Button>

            <Hstack>
              <RecommendationActionButton
                onClick={handleClickSave}
                disabled={isSaved || isSaving}
              >
                {isSaved ? "저장완료" : isSaving ? "저장 중..." : "저장하기"}
              </RecommendationActionButton>

              <RecommendationActionButton
                onClick={onRetry}
                disabled={isRetrying}
              >
                {isRetrying ? "다시 추천 중..." : "다시 추천"}
              </RecommendationActionButton>
            </Hstack>
          </div>
        </section>
      </Vstack>
    </RoundBox>
  )
}

export default RecommendationCard
