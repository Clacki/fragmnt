import ChatImage from "@/assets/images/find-scent/chat.jpg"
import PhotoImage from "@/assets/images/find-scent/photo.jpg"
import SurveyImage from "@/assets/images/find-scent/survey.jpg"
import {
  CenterContainer,
  FadeUpItem,
  Hstack,
  PageIntro,
  Vstack,
} from "@/shared/components"
import { useEffect, useState } from "react"
import type { FeatureCardItem } from "../types/feature-card.type"
import FeatureCard from "./feature-card/FeatureCard"
import "./find-scent.css"

const featureCardList: FeatureCardItem[] = [
  {
    id: 1,
    imageSrc: PhotoImage,
    title: "사진 기반 공간 분석",
    description:
      "사진 속 공간의 무드를 포착해\n분위기를 분석한 향기를 제안합니다",
  },
  {
    id: 2,
    imageSrc: ChatImage,
    title: "대화 기반 취향 분석",
    description: "당신의 문장 사이에서\n오늘의 향기를 찾습니다",
  },
  {
    id: 3,
    imageSrc: SurveyImage,
    title: "키워드 기반 정밀 분석",
    description: "선호하는 분위기와 향 키워드를\n조합하여 향기를 찾습니다",
  },
]

const FindScent = () => {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const preloadImages = async () => {
      const imageLoaders = featureCardList.map((card) => {
        return new Promise((resolve, reject) => {
          const image = new Image()
          image.src = card.imageSrc
          image.onload = resolve
          image.onerror = reject
        })
      })

      try {
        await Promise.all(imageLoaders)
        setIsReady(true)
      } catch {
        setIsReady(true)
      }
    }

    preloadImages()
  }, [])

  return (
    <CenterContainer className="w-[850px] pt-16 pb-60">
      <Vstack gap="none" className="gap-20">
        <PageIntro
          title="어떤 방식으로 향기를 찾을까요?"
          description="당신의 공간과 취향, 그 정교한 조각(Fragment)들을 분석해 드립니다"
        />

        <Hstack className="w-full justify-center gap-6">
          {featureCardList.map((card, index) => (
            <FadeUpItem key={card.id} isReady={isReady} delay={index * 160}>
              <FeatureCard {...card} />
            </FadeUpItem>
          ))}
        </Hstack>
      </Vstack>
    </CenterContainer>
  )
}

export default FindScent
