import { Button } from "@/shared/components"
import type { RecommendedScent, SimilarScentType } from "@/shared/types"
import { useNavigate } from "@tanstack/react-router"
import { MessageSquareIcon } from "lucide-react"
import SimilarScent from "./similar-scent/SimilarScent"

type AnalysisType = "image" | "chatbot" | "keyword" | "survey"
type BottomSectionProps = {
  similarScents?: SimilarScentType[]
  resultId?: number
  scent?: RecommendedScent
  type: AnalysisType
}
const BottomSection = ({
  similarScents = [],
  resultId,
  scent,
  type,
}: BottomSectionProps) => {
  const navigate = useNavigate()

  const handleReviewClick = () => {
    if (!resultId || !scent) {
      return
    }

    const { name, eng_name, thumbnail_url } = scent

    navigate({
      to: "/review",
      search: {
        resultId: String(resultId),
        type,
        name,
        engName: eng_name,
        thumbnailUrl: thumbnail_url,
      },
    })
  }

  return (
    <div className="w-full mt-2xl flex flex-col items-center justify-center">
      {similarScents.length > 0 && (
        <>
          <div className="w-full mb-md text-lg font-semibold text-text-primary">
            Similar Scents
          </div>

          <div className="w-full grid grid-cols-2 gap-md">
            {similarScents.map((scent) => (
              <SimilarScent
                key={scent.id}
                imageSrc={scent.thumbnail_url}
                imageAlt={scent.name}
                label={scent.categories}
                title={scent.eng_name}
                description={scent.description}
                onClick={() => {
                  navigate({
                    to: "/scent-detail",
                    search: {
                      id: scent.id,
                    },
                  })
                }}
              />
            ))}
          </div>
        </>
      )}

      <div className="flex flex-col gap-md items-center justify-center border border-primary p-lg bg-badge w-full mt-2xl rounded-lg">
        <div className="bg-card p-md rounded-full mb-md">
          <MessageSquareIcon size={20} className="text-primary" />
        </div>

        <div className="flex flex-col gap-xs items-center">
          <p className="font-semibold text-md">추천 결과에 만족하셨나요?</p>
          <p className="font-light text-md text-text-sub">
            추천받은 향기에 대한 생각을 공유해 주시면 다음 추천에 반영할게요.
          </p>
        </div>

        <Button
          size="sm"
          onClick={handleReviewClick}
          disabled={!resultId || !scent}
        >
          후기 남기기
        </Button>
      </div>
    </div>
  )
}

export default BottomSection
