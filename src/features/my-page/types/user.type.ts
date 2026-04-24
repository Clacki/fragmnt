export type UserProfile = {
  name: string
  email: string
  phone_number: string
  birthday: string
  profile_image_url: string | null
}

export type UpdateUserProfileRequest = {
  name: string
  email: string
  phone_number: string
  birthday: string
}

export type FavoriteScent = {
  id: number
  imageSrc?: string
  imageAlt?: string
  category: string
  title: string
  tags: string[]
  savedAt: string
}
