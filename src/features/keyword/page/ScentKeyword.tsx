import {
  BackButton,
  Button,
  Container,
  PageIntro,
  Vstack,
} from "@/shared/components"
import { useNavigate } from "@tanstack/react-router"
import { useState } from "react"
import KeywordSelectionSection from "./keyword-selection-section/KeywordSelectionSection"
import SelectedKeywordSection from "./selected-keyword-section/SelectedKeywordSection"

export type SelectedKeyword = {
  keywordId: number
  keywordName: string
  keywordDivision: string
}

const ScentKeyword = () => {
  const navigate = useNavigate()
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
