export const getIntensityLabel = (
  intensity: number
): "약함" | "보통" | "강함" => {
  if (intensity <= 50) return "약함"
  if (intensity <= 70) return "보통"
  return "강함"
}
