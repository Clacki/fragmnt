import type { ImageAnalysisResult } from "@/features/photo/types/image-analysis.type"
import {
  CenterContainer,
  Container,
  PageIntro,
  Vstack,
} from "@/shared/components"
import { useMemo } from "react"
import AISection from "./sections/ai-section/AISection"
import BottomSection from "./sections/bottom-section/BottomSection"
import TopCardSection from "./sections/card-section/TopCardSection"
import ScentSection from "./sections/scent-section/ScentSection"

type ResultPageProps = {
  resultId: string
}

const ResultPage = ({ resultId }: ResultPageProps) => {
  const result = useMemo(() => {
    const storedResult = sessionStorage.getItem("imageAnalysisResult")

    if (!storedResult) {
      return undefined
    }

    const parsedResult = JSON.parse(storedResult) as ImageAnalysisResult

    if (String(parsedResult.id) !== resultId) {
      return undefined
    }

    return parsedResult
  }, [resultId])

  return (
    <CenterContainer className="w-full py-2xl">
      <Container
        width="xl"
        isPadded
        className="min-h-screen max-w-container-xl bg-surface-default"
      >
        <Vstack className="gap-xs pb-lg items-center justify-between">
          <PageIntro
            title="당신을 위한 향기 추천 결과"
            description="당신의 취향과 정보를 분석하여, 가장 잘어울리는 향기를 찾았습니다"
          />

          <TopCardSection result={result} />
          <AISection aiComment={result?.ai_comment} />
          <ScentSection scent={result?.recommended_scent} />
          <BottomSection
            resultId={result?.id}
            similarScents={result?.recommended_scent.similar_scents ?? []}
          />
        </Vstack>
      </Container>
    </CenterContainer>
  )
}

export default ResultPage
