import ChatImage from "@/assets/images/find-scent/chatbot.webp"
import PhotoImage from "@/assets/images/find-scent/photo.webp"
import SurveyImage from "@/assets/images/find-scent/survey.webp"

import type { FeatureCardItem } from "../types/feature-card.type"

export const featureCardList: FeatureCardItem[] = [
  {
    id: 1,
    imageSrc: PhotoImage,
    title: "사진 기반 공간 분석",
    description:
      "사진 속 공간의 무드를 포착해\n분위기를 분석한 향기를 제안합니다",
    to: "photo",
    actionType: "navigate",
  },
  {
    id: 2,
    imageSrc: ChatImage,
    title: "대화 기반 취향 분석",
    description: "당신의 문장 사이에서\n오늘의 향기를 찾습니다",
    to: "chat",
    actionType: "navigate",
  },
  {
    id: 3,
    imageSrc: SurveyImage,
    title: "키워드 기반 정밀 분석",
    description: "선호하는 분위기와 향 키워드를\n조합하여 향기를 찾습니다",
    actionType: "modal",
  },
]
