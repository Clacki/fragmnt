import type { ScentCardItem } from "../types/scent-card.type"
import type { ScentApiItem } from "./scent-api.type"

export const mapScentApiToCard = (item: ScentApiItem): ScentCardItem => {
  return {
    id: item.id,
    name: item.name,
    eng_name: item.eng_name,
    description: item.description,
    imageUrl: item.thumbnail_url,
    tags: item.tags,
    category: item.categories,
    season: item.season,
    intensity: item.intensity,
  }
}
