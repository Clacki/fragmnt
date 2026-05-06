import EmptyScentImage from "@/assets/images/empty-state/empty-scent.svg"
import {
  BackButton,
  CenterContainer,
  Container,
  EmptyState,
  LoadingState,
  PageIntro,
  Vstack,
} from "@/shared/components"

import type { AnalysisResult, ResultType } from "@/shared/types"
import { useMemo } from "react"
import { useAnalysisDetailQuery } from "../../../shared/hooks/useAnalysisDetailQuery"
import ResultStateLayout from "./result-state-layout/ResultStateLayout"
import AISection from "./sections/ai-section/AISection"
import BottomSection from "./sections/bottom-section/BottomSection"
import TopCardSection from "./sections/card-section/TopCardSection"
import ScentSection from "./sections/scent-section/ScentSection"

type ResultPageProps = {
  resultId: number
  type: ResultType
}

const ResultPage = ({ resultId, type }: ResultPageProps) => {
  const {
    data: fetchedResult,
    isLoading,
    isError,
  } = useAnalysisDetailQuery({
    resultId,
    type,
    enabled: Number.isFinite(resultId),
  })

  const result = useMemo(() => {
    if (!fetchedResult) {
      return undefined
    }

    return {
      ...fetchedResult,
      type,
    } as AnalysisResult
  }, [fetchedResult, type])

  if (!Number.isFinite(resultId)) {
    return (
      <ResultStateLayout>
        <EmptyState
          imageSrc={EmptyScentImage}
          title="잘못된 결과 ID입니다."
          description="결과 페이지 주소를 다시 확인해주세요."
        />
      </ResultStateLayout>
    )
  }

  if (isLoading) {
    return (
      <ResultStateLayout>
        <LoadingState message="추천 결과를 불러오는 중입니다." />
      </ResultStateLayout>
    )
  }

  if (isError || !result) {
    return (
      <ResultStateLayout>
        <EmptyState
          imageSrc={EmptyScentImage}
          title="추천 결과를 불러올 수 없습니다."
          description="잠시 후 다시 시도하거나, 향기 추천을 다시 진행해주세요."
        />
      </ResultStateLayout>
    )
  }

  return (
    <CenterContainer className="w-full py-xl">
      <Container
        width="xl"
        isPadded
        className="min-h-screen max-w-container-xl bg-surface-default"
      >
        <Vstack className="items-center justify-between gap-xs pb-lg">
          <PageIntro
            title="당신을 위한 향기 추천 결과"
            description="당신의 취향과 정보를 분석하여, 가장 잘어울리는 향기를 찾았습니다"
            backButton={<BackButton fallbackPath="/my-page" mode="fallback" />}
          />

          <TopCardSection result={result} type={type} />
          <AISection result={result} />

          {result.recommended_scent && (
            <ScentSection scent={result.recommended_scent} />
          )}

          <BottomSection
            resultId={result.id}
            scent={result.recommended_scent}
            similarScents={result.recommended_scent?.similar_scents ?? []}
            type={type}
          />
        </Vstack>
      </Container>
    </CenterContainer>
  )
}

export default ResultPage
