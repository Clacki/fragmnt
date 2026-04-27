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
  useSurveyQuestions,
  useSurveyResultMutation,
} from "../hooks/useSurveyQuestions"
import PreferenceSlider from "./preference-slider/PreferenceSlider"

const DEFAULT_SURVEY_VALUE = 2

const ScentSurvey = () => {
  const { data: questions, isPending, isError } = useSurveyQuestions()
  const { mutateAsync: submitSurveyResult, isPending: isSubmitting } =
    useSurveyResultMutation()

  const navigate = useNavigate()
  const [answers, setAnswers] = useState<Record<number, number>>({})

  const handleBack = () => {
    navigate({ to: "/find-scent" })
  }

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

    sessionStorage.setItem("surveyAnalysisResult", JSON.stringify(result))

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

  if (isError || !questions) {
    return (
      <EmptyState
        imageSrc={EmptyScentImage}
        title="설문을 불러오지 못했습니다"
        description="잠시 후 다시 시도해주세요!"
      />
    )
  }

  if (isSubmitting || isPending) {
    return (
      <Container className="py-60">
        <LoadingState />
      </Container>
    )
  }

  return (
    <Container className="px-30 pt-16 pb-40">
      <Vstack className="w-full gap-lg">
        <PageIntro
          title="나만의 향 찾기"
          description={`각 질문에 대해 선호하는 방향을 선택해 주세요
드래그하거나 점을 탭하여 선택할 수 있습니다`}
          backButton={<BackButton onClick={handleBack} />}
        />

        {questions.map((item, index) => {
          return (
            <PreferenceSlider
              key={`${item.title}-${index}`}
              item={item}
              order={index + 1}
              value={answers[index] ?? DEFAULT_SURVEY_VALUE}
              onChange={(value) => {
                handleChangeAnswer({ index, value })
              }}
            />
          )
        })}

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
