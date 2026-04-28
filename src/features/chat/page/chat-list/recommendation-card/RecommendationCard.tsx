import { Button, Hstack, RoundBox, Tag, Vstack } from "@/shared/components"
import EmptyImage from "@/shared/components/empty-image/EmptyImage"
import { useNavigate } from "@tanstack/react-router"
import type { RecommendationCardData } from "../../../types/message.types"
import RecommendationActionButton from "./recommendation-button/RecommendationActionButton"

type RecommendationCardProps = RecommendationCardData

const RecommendationCard = ({
  recommendationId,
  sessionId,
  imageSrc,
  imageAlt,
  name,
  englishName,
  description,
  tags,
}: RecommendationCardProps) => {
  const navigate = useNavigate()
  const hasImage = Boolean(imageSrc)

  const handleClickDetail = () => {
    navigate({
      to: "/find-scent/result/$resultId",
      params: {
        resultId: String(recommendationId),
      },
      search: {
        type: "chat",
        sessionId,
      },
    })
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
              <RecommendationActionButton>저장하기</RecommendationActionButton>
              <RecommendationActionButton>다시 추천</RecommendationActionButton>
            </Hstack>
          </div>
        </section>
      </Vstack>
    </RoundBox>
  )
}

export default RecommendationCard
