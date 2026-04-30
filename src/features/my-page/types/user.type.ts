export type AnalysisType = "image" | "chatbot" | "keyword" | "survey"

export type UserProfile = {
  name: string
  email: string
  phone_number: string
  birthday: string
  profile_image_url: string | null
}

export type UpdateUserProfileRequest = {
  name: string
  birthday: string
  profile_image_url?: string
}

export type FavoriteScent = {
  id: number
  type: AnalysisType
  created_at: string

  scent: {
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
}

export type UpdateFavoriteScentRequest = {
  id: number
  type?: AnalysisType
  status: boolean
}
