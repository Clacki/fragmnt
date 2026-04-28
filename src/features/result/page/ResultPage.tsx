import EmptyScentImage from "@/assets/images/empty-state/empty-scent.svg"
import { useChatRecommendationResultQuery } from "@/features/chat/hooks/useChatRecommendationResultQuery"
import {
  BackButton,
  CenterContainer,
  Container,
  EmptyState,
  LoadingState,
  PageIntro,
  Vstack,
} from "@/shared/components"

import { useNavigate } from "@tanstack/react-router"
import { useMemo } from "react"
import type { AnalysisResult } from "../types/analysis-result.types"
import AISection from "./sections/ai-section/AISection"
import BottomSection from "./sections/bottom-section/BottomSection"
import TopCardSection from "./sections/card-section/TopCardSection"
import ScentSection from "./sections/scent-section/ScentSection"

type ResultType = "image" | "survey" | "keyword" | "chat"

const RESULT_STORAGE_KEY: Record<Exclude<ResultType, "chat">, string> = {
  image: "imageAnalysisResult",
  survey: "surveyAnalysisResult",
  keyword: "keywordAnalysisResult",
}

type ResultPageProps = {
  resultId: string
  type: ResultType
  sessionId?: number
}

const ResultPage = ({ resultId, type, sessionId }: ResultPageProps) => {
  const navigate = useNavigate()

  const numericResultId = Number(resultId)
  const isChatResult = type === "chat"

  const storedResult = useMemo(() => {
    if (isChatResult) {
      return undefined
    }

    const storageKey = RESULT_STORAGE_KEY[type]
    const storedResult = sessionStorage.getItem(storageKey)

    if (!storedResult) {
      return undefined
    }

    const parsedResult = JSON.parse(storedResult) as AnalysisResult

    if (String(parsedResult.id) !== resultId) {
      return undefined
    }

    return parsedResult
  }, [resultId, type, isChatResult])

  const {
    data: chatResult,
    isLoading: isChatLoading,
    isError: isChatError,
  } = useChatRecommendationResultQuery({
    sessionId: sessionId ?? 0,
    recommendationId: numericResultId,
    enabled:
      isChatResult &&
      sessionId !== undefined &&
      Number.isFinite(numericResultId),
  })

  const result = (isChatResult ? chatResult : storedResult) as
    | AnalysisResult
    | undefined

  const isLoading = isChatResult ? isChatLoading : false
  const isError = isChatResult ? isChatError : false

  const handleBack = () => {
    navigate({ to: "/my-page" })
  }

  if (isLoading) {
    return (
      <CenterContainer className="w-full py-2xl">
        <Container
          width="xl"
          isPadded
          className="min-h-screen max-w-container-xl bg-surface-default"
        >
          <LoadingState message="추천 결과를 불러오는 중입니다." />
        </Container>
      </CenterContainer>
    )
  }

  if (isError || !result) {
    return (
      <CenterContainer className="w-full py-2xl">
        <Container
          width="xl"
          isPadded
          className="min-h-screen max-w-container-xl bg-surface-default"
        >
          <EmptyState
            imageSrc={EmptyScentImage}
            title="추천 결과를 불러올 수 없습니다."
            description="잠시 후 다시 시도하거나, 향기 추천을 다시 진행해주세요."
          />
        </Container>
      </CenterContainer>
    )
  }

  return (
    <CenterContainer className="w-full py-2xl">
      <Container
        width="xl"
        isPadded
        className="min-h-screen max-w-container-xl bg-surface-default"
      >
        <Vstack className="items-center justify-between gap-xs pb-lg">
          <PageIntro
            title="당신을 위한 향기 추천 결과"
            description="당신의 취향과 정보를 분석하여, 가장 잘어울리는 향기를 찾았습니다"
            backButton={<BackButton onClick={handleBack} />}
          />

          <TopCardSection result={result} />

          <AISection aiComment={result.ai_comment} />

          {result.recommended_scent && (
            <ScentSection scent={result.recommended_scent} />
          )}

          <BottomSection
            resultId={result.id}
            similarScents={result.recommended_scent?.similar_scents ?? []}
          />
        </Vstack>
      </Container>
    </CenterContainer>
  )
}

export default ResultPage
