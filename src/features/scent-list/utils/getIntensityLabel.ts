import type { ScentIntensityLabel } from "../types/scent-card.type"

export const getIntensityLabel = (intensity: number): ScentIntensityLabel => {
  if (intensity <= 50) return "weak"
  if (intensity <= 70) return "normal"
  return "strong"
}
