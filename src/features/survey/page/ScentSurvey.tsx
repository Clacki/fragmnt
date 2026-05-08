import {
  BackButton,
  Button,
  Container,
  PageIntro,
  Vstack,
} from "@/shared/components"
import LoadingState from "@/shared/components/loading-state/LoadingState"
import { useUserGuard } from "@/shared/hooks/useUserGuard"
import { useNavigate } from "@tanstack/react-router"
import { useState } from "react"
import {
  useSurveyQuestions,
  useSurveyResultMutation,
} from "../hooks/useSurveyQuestions"
import PreferenceSlider from "./preference-slider/PreferenceSlider"

const DEFAULT_SURVEY_VALUE = 2

const ScentSurvey = () => {
  useUserGuard()

  const { data: questions, isPending, isError } = useSurveyQuestions()
  const { mutateAsync: submitSurveyResult, isPending: isSubmitting } =
    useSurveyResultMutation()

  const navigate = useNavigate()
  const [answers, setAnswers] = useState<Record<number, number>>({})

  const handleChangeAnswer = ({
    index,
    value,
  }: {
    index: number
    value: number
  }) => {
    setAnswers((prev) => ({
      ...prev,
      [index]: value,
    }))
  }

  const handleSubmit = async () => {
    if (!questions) {
      return
    }

    const requestBody = questions.map((question, index) => {
      const selectedAnswerIndex = answers[index] ?? DEFAULT_SURVEY_VALUE
      const selectedAnswer = question.answer[selectedAnswerIndex]

      return {
        title: question.title,
        results: selectedAnswer.content,
        question_num: index + 1,
      }
    })

    const result = await submitSurveyResult(requestBody)

    navigate({
      to: "/find-scent/result/$resultId",
      params: {
        resultId: String(result.id),
      },
      search: {
        type: "survey",
      },
    })
  }

  if (isPending || isError || !questions) {
    return (
      <Container className="flex min-h-[70dvh] items-center justify-center px-10">
        <LoadingState />
      </Container>
    )
  }

  return (
    <Container className="relative px-10 pt-16 pb-20 md:px-30 md:pt-16 md:pb-40">
      {isSubmitting && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <LoadingState />
        </div>
      )}
      <Vstack className="w-full gap-lg">
        <PageIntro
          title="나만의 향 찾기"
          description={`각 질문에 대해 선호하는 방향을 선택해 주세요
드래그하거나 점을 탭하여 선택할 수 있습니다`}
          backButton={<BackButton fallbackPath="/find-scent" mode="fallback" />}
        />

        {questions.map((item, index) => (
          <PreferenceSlider
            key={`${item.title}-${index}`}
            item={item}
            order={index + 1}
            value={answers[index] ?? DEFAULT_SURVEY_VALUE}
            onChange={(value) => {
              handleChangeAnswer({ index, value })
            }}
          />
        ))}

        <Button
          size="lg"
          onClick={handleSubmit}
          className="flex items-center justify-center font-bold text-lg"
        >
          나만의 향기 확인하기
        </Button>
      </Vstack>
    </Container>
  )
}

export default ScentSurvey
