// map 변환 함수 추가해야 할 듯
type UserProfile = {
  profileImageUrl?: string
  userName: string
  userId: string
  email: string
  gender: string
  phone: string
  birthDate: string
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

export type { UserProfile }
