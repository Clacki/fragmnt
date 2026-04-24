import type {
  GetScentDetailResponse,
  RecommendationCardData,
} from "../types/message.types"

export const toRecommendationCardData = (
  scent: GetScentDetailResponse["data"]
): RecommendationCardData => ({
  id: String(scent.id),
  imageSrc: scent.thumbnail_url,
  imageAlt: scent.name,
  name: scent.name,
  englishName: scent.eng_name,
  description: scent.description,
  tags: scent.tags,
})
