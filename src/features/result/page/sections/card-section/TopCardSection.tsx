import EmptyStateImage from "@/assets/images/empty-state/empty-scent.svg"
import { EmptyState } from "@/shared/components"

import { useSaveAnalysisFeedbackMutation } from "@/shared/hooks/useSaveAnalysisFeedback"
import type { AnalysisResult, ResultType } from "@/shared/types"
import { useNavigate } from "@tanstack/react-router"
import ResultTopCard from "./result-card/ResultCard"

type TopCardSectionProps = {
  result?: AnalysisResult
  type: ResultType
}

const TopCardSection = ({ result, type }: TopCardSectionProps) => {
  const navigate = useNavigate()

  const recommendedScent = result?.recommended_scent
  const matchScore = result?.match_score
  const isSaved = result?.is_saved ?? false

  const { mutate: saveFeedback, isPending } = useSaveAnalysisFeedbackMutation()

  if (!recommendedScent || !result) {
    return (
      <div className="mt-2xl flex justify-center">
        <EmptyState
          imageSrc={EmptyStateImage}
          title="추천 결과가 없어요"
          description="다시 향기 추천을 받아보세요"
          className="border-none"
        />
      </div>
    )
  }

  const handleClickDetail = () => {
    navigate({
      to: "/scent-detail",
      search: {
        id: recommendedScent.id,
      },
    })
  }

  const handleRetry = () => {
    navigate({
      to: "/find-scent",
    })
  }

  const handleToggleSave = () => {
    saveFeedback({
      id: result.id,
      type,
      status: !isSaved,
    })
  }

  return (
    <section>
      <ResultTopCard
        engName={recommendedScent.eng_name}
        imageSrc={recommendedScent.thumbnail_url}
        imageAlt={recommendedScent.name}
        category={recommendedScent.categories}
        matchRate={matchScore ?? 0}
        title={recommendedScent.name}
        description={recommendedScent.description}
        tags={recommendedScent.tags.slice(0, 2)}
        isSavePending={isPending}
        onDetailClick={handleClickDetail}
        onRetryClick={handleRetry}
        onAddCollectionClick={handleToggleSave}
        isSaved={isSaved}
      />
    </section>
  )
}

export default TopCardSection
