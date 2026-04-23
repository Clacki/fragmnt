import { Button } from "@/shared/components"
import { useNavigate } from "@tanstack/react-router"
import { MessageSquareIcon } from "lucide-react"
import { resultMock } from "../../../mock/result.mock"
import SimilarScent from "./similar-scent/SimilarScent"

const BottomSection = () => {
  const navigate = useNavigate()
  const similarScents = resultMock.recommended_scent.similar_scents
  const handleReviewClick = () => {
    navigate({ to: "/review" })
  }

  return (
    <div className="w-full mt-2xl flex flex-col items-center justify-center">
      <div className="w-full mb-md text-base font-semibold text-text-primary text-lg">
        Similar Scents
      </div>
      {/* cards */}
      <div className="w-full grid grid-cols-2 gap-md">
        {similarScents.map((scentId) => (
          <SimilarScent
            key={scentId}
            imageSrc=""
            imageAlt={`Scent ${scentId}`}
            label=""
            title={`Scent #${scentId}`}
            description="유사한 향 정보는 추후 제공될 예정입니다."
          />
        ))}
      </div>
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

        <Button size="sm" onClick={handleReviewClick}>
          후기 남기기
        </Button>
      </div>
    </div>
  )
}

export default BottomSection
