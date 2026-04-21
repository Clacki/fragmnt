import {
  BackButton,
  Button,
  Container,
  PageIntro,
  Vstack,
} from "@/shared/components"
import { useState } from "react"
import { scentSurveyMockData } from "../mocks/scent-servey-mock"
import PreferenceSlider from "./preference-slider/PreferenceSlider"

const DEFAULT_SURVEY_VALUE = 2

const ScentSurvey = () => {
  const [answers, setAnswers] = useState<number[]>(
    scentSurveyMockData.map(() => DEFAULT_SURVEY_VALUE)
  )

  const handleChangeAnswer = ({
    index,
    value,
  }: {
    index: number
    value: number
  }) => {
    setAnswers((prev) =>
      prev.map((item, itemIndex) => {
        if (itemIndex === index) {
          return value
        }

        return item
      })
    )
  }

  const handleSubmit = () => {
    console.log(answers)
  }

  return (
    <Container className="px-30 pt-16 pb-40">
      <Vstack className="w-full gap-lg">
        <PageIntro
          title="나만의 향 찾기"
          description={`각 질문에 대해 선호하는 방향을 선택해 주세요
드래그하거나 점을 탭하여 선택할 수 있습니다`}
          backButton={<BackButton />}
        />

        {scentSurveyMockData.map((item, index) => (
          <PreferenceSlider
            item={item}
            value={answers[index]}
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
