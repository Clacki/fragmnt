import type {
  GetScentDetailResponse,
  RecommendationCardData,
} from "../types/message.types"

type RecommendationCardDisplayData = Omit<
  RecommendationCardData,
  "recommendationId" | "sessionId"
>

export const toRecommendationCardData = (
  scent: GetScentDetailResponse["data"]
): RecommendationCardDisplayData => {
  return {
    imageSrc: scent.thumbnail_url,
    imageAlt: scent.name,
    name: scent.name,
    englishName: scent.eng_name,
    description: scent.description,
    tags: scent.tags,
  }
}
