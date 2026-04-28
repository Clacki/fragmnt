import ImageMock from "@/assets/images/mocks/scent-mock-01.jpg"
import type { RecommendationCardData } from "../types/message.types"

export const mockAssistantText =
  "차분하고 우디한 무드에 어울리는 향을 추천드릴게요."

export const mockRecommendation: RecommendationCardData = {
  recommendationId: 999,
  imageSrc: ImageMock,
  imageAlt: "향수 추천 이미지",
  name: "포레스트 리저브",
  englishName: "Forest Reserve",
  description: "깊은 숲의 공기처럼 차분하고 부드러운 우디 계열의 향이에요.",
  tags: ["우디", "차분한", "포근한"],
}
