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
import {
  useKeywordQuestions,
  usePostKeywordResult,
} from "../hooks/keyword-questions"
import type { SelectedKeyword } from "../types/keyword-questions.types"
import KeywordSelectionSection from "./keyword-selection-section/KeywordSelectionSection"
import SelectedKeywordSection from "./selected-keyword-section/SelectedKeywordSection"

const MIN_KEYWORD_COUNT = 3

const ScentKeyword = () => {
  // useUserGuard()
  // TODO: Mock 배포 환경에서 페이지 접근성 확인을 위해 인증 가드를 임시 비활성화합니다.
  // 실제 인증 연동 시 로그인 상태 기반 접근 제한을 복구합니다.

  const navigate = useNavigate()
  const { data: questions, isPending, isError } = useKeywordQuestions()
  const [selectedKeywords, setSelectedKeywords] = useState<SelectedKeyword[]>(
    []
  )
  const { mutate: postKeywordResult, isPending: isPostKeywordResultPending } =
    usePostKeywordResult()

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

  const handleClearKeywords = () => {
    setSelectedKeywords([])
  }

  const handleSubmitKeyword = () => {
    if (selectedKeywords.length < MIN_KEYWORD_COUNT) {
      return
    }

    const requestBody = selectedKeywords.map((keyword) => {
      return {
        keyword_id: keyword.keywordId,
        keyword_name: keyword.keywordName,
      }
    })

    postKeywordResult(requestBody, {
      onSuccess: (result) => {
        navigate({
          to: "/find-scent/result/$resultId",
          params: {
            resultId: String(result.id),
          },
          search: {
            type: "keyword",
          },
        })
      },
    })
  }

  if (isPending || !questions) {
    return (
      <Container className="py-60">
        <LoadingState />
      </Container>
    )
  }

  if (isError) {
    return (
      <EmptyState
        imageSrc={EmptyScentImage}
        title="키워드를 불러오지 못했습니다"
        description="잠시 후 다시 시도해주세요!"
      />
    )
  }

  return (
    <Container className="relative px-10 pt-16 pb-20 md:px-30 md:pt-16 md:pb-40">
      {isPostKeywordResultPending && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <LoadingState />
        </div>
      )}
      <Vstack>
        <PageIntro
          title="나만의 향 찾기"
          description={`지금 가장 끌리는 무드를 선택해 보세요
당신의 취향을 담은 향기를 큐레이션해 드립니다`}
          backButton={<BackButton fallbackPath="/find-scent" mode="fallback" />}
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
          onClick={handleSubmitKeyword}
          size="lg"
          className="mt-lg flex items-center justify-center text-lg font-bold"
          disabled={
            selectedKeywords.length < MIN_KEYWORD_COUNT ||
            isPostKeywordResultPending
          }
        >
          나만의 향기 확인하기
        </Button>
      </Vstack>
    </Container>
  )
}

export default ScentKeyword
