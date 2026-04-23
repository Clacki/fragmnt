import EmptyStateImage from "@/assets/images/empty-state/empty-scent.svg"
import { EmptyState } from "@/shared/components"

import { resultMock } from "../../../mock/result.mock"
import ResultTopCard from "./result-card/ResultCard"

const TopCardSection = () => {
  const { recommended_scent, match_score } = resultMock

  const hasResult = !!recommended_scent

  if (!hasResult) {
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
        imageSrc={recommended_scent.thumbnail_url}
        imageAlt={`${recommended_scent.name} 향 이미지`}
        category={recommended_scent.categories}
        matchRate={match_score}
        title={recommended_scent.name}
        description={recommended_scent.description}
        tags={recommended_scent.tags.slice(0, 2)}
      />
    </section>
  )
}

export default TopCardSection
