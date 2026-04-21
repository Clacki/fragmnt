import { Button, Hstack, RoundBox, Tag, Vstack } from "@/shared/components"
import type { RecommendationCardData } from "../../../types/message.types"
import RecommendationActionButton from "./recommendation-button/RecommendationActionButton"

type RecommendationCardProps = RecommendationCardData

const RecommendationCard = ({
  imageSrc,
  imageAlt,
  name,
  englishName,
  description,
  tags,
}: RecommendationCardProps) => {
  return (
    <RoundBox
      className="message-enter w-full max-w-[440px] bg-white"
      padding="none"
    >
      <Vstack gap="none">
        <div>
          <img
            className="h-60 w-full rounded-t-xl object-cover"
            src={imageSrc}
            alt={imageAlt}
          />
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
            <Button className="w-full">자세히 보기</Button>

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
