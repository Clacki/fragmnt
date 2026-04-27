export type ScentApiItem = {
  id: number
  name: string
  categories: string
  tags: string[]
  description: string
  eng_name: string
  intensity: number
  season: string[]
  thumbnail_url: string
}

export type GetScentsResponse = {
  status: "success"
  data: ScentApiItem[]
}
