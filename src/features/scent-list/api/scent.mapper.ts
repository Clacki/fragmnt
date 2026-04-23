import type { ScentCardItem } from "../types/scent-card.type"
import type { ScentApiItem } from "./scent-api.type"

export const mapScentApiToCard = (item: ScentApiItem): ScentCardItem => {
  return {
    id: item.id,
    name: item.name,
    description: item.description,
    imageUrl: item.imageUrl,
    tags: item.tags,
    category: item.category,
    season: item.season,
    intensity: item.intensity,
  }
}
