import EmptyScentImage from "@/assets/images/empty-state/empty-scent.svg"
import {
  BackButton,
  Button,
  Container,
  EmptyState,
  PageIntro,
  Vstack,
} from "@/shared/components"
import { useNavigate } from "@tanstack/react-router"
import { useState } from "react"
import { useSurveyQuestions } from "../hooks/useSurveyQuestions"
import PreferenceSlider from "./preference-slider/PreferenceSlider"

const DEFAULT_SURVEY_VALUE = 2

const ScentSurvey = () => {
  const { data: questions, isPending, isError } = useSurveyQuestions()

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

  const handleSubmit = () => {
    if (!questions) {
      return
    }

    const normalizedAnswers = questions.map((_, index) => {
      return answers[index] ?? DEFAULT_SURVEY_VALUE
    })

    console.log(normalizedAnswers)
  }

  if (isPending) {
    return <Container className="px-30 pt-16 pb-40">불러오는 중...</Container>
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
