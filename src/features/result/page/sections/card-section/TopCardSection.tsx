import EmptyStateImage from "@/assets/images/empty-state/empty-scent.svg"
import { EmptyState } from "@/shared/components"

import type { ImageAnalysisResult } from "@/features/photo/types/image-analysis.type"
import ResultTopCard from "./result-card/ResultCard"

type TopCardSectionProps = {
  result?: ImageAnalysisResult
}

const TopCardSection = ({ result }: TopCardSectionProps) => {
  const recommendedScent = result?.recommended_scent
  const matchScore = result?.match_score

  if (!recommendedScent) {
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

  return (
    <section>
      <ResultTopCard
        imageSrc={recommendedScent.thumbnail_url}
        imageAlt={`${recommendedScent.name} 향 이미지`}
        category={recommendedScent.categories}
        matchRate={matchScore ?? 0}
        title={recommendedScent.name}
        description={recommendedScent.description}
        tags={recommendedScent.tags.slice(0, 2)}
      />
    </section>
  )
}

export default TopCardSection
