import EmptyScentImage from "@/assets/images/empty-state/empty-scent.svg"
import {
  BackButton,
  Button,
  Container,
  EmptyState,
  PageIntro,
  Vstack,
} from "@/shared/components"
import LoadingState from "@/shared/components/loading-state/LoadingState"
import { useNavigate } from "@tanstack/react-router"
import { useState } from "react"
import { useKeywordQuestions } from "../hooks/keyword-questions"
import KeywordSelectionSection from "./keyword-selection-section/KeywordSelectionSection"
import SelectedKeywordSection from "./selected-keyword-section/SelectedKeywordSection"

export type SelectedKeyword = {
  keywordId: number
  keywordName: string
  keywordDivision: string
}

const ScentKeyword = () => {
  const navigate = useNavigate()
  const { data: questions, isPending, isError } = useKeywordQuestions()
  const [selectedKeywords, setSelectedKeywords] = useState<SelectedKeyword[]>(
    []
  )

  const handleToggleKeyword = (keyword: SelectedKeyword) => {
    setSelectedKeywords((prev) => {
      const isSelected = prev.some(
        (selectedKeyword) => selectedKeyword.keywordId === keyword.keywordId
      )

      if (isSelected) {
        return prev.filter(
          (selectedKeyword) => selectedKeyword.keywordId !== keyword.keywordId
        )
      }

      return [...prev, keyword]
    })
  }

  const handleBack = () => {
    navigate({ to: "/find-scent" })
  }

  const handleClearKeywords = () => {
    setSelectedKeywords([])
  }

  if (isPending) {
    return <LoadingState />
  }

  if (isError || !questions) {
    return (
      <EmptyState
        imageSrc={EmptyScentImage}
        title="설문을 불러오지 못했습니다"
        description="잠시 후 다시 시도해주세요!"
      />
    )
  }

  return (
    <Container className="px-30 pt-16 pb-40">
      <Vstack>
        <PageIntro
          title="나만의 향 찾기"
          description={`지금 가장 끌리는 무드를 선택해 보세요
당신의 취향을 담은 향기를 큐레이션해 드립니다`}
          backButton={<BackButton onClick={handleBack} />}
        />

        <KeywordSelectionSection
          questions={questions}
          selectedKeywords={selectedKeywords}
          onToggleKeyword={handleToggleKeyword}
        />

        <SelectedKeywordSection
          selectedKeywords={selectedKeywords}
          onToggleKeyword={handleToggleKeyword}
          onClearKeywords={handleClearKeywords}
        />

        <Button
          size="lg"
          className="mt-lg flex items-center justify-center text-lg font-bold"
        >
          나만의 향기 확인하기
        </Button>
      </Vstack>
    </Container>
  )
}

export default ScentKeyword
