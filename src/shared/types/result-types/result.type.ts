export type SimilarScentType = {
  id: number
  name: string
  eng_name: string
  categories: string
  tags: string[]
  description: string
  intensity: number
  season: string[]
  thumbnail_url: string
}

export type RecommendedScent = {
  id: number
  name: string
  eng_name: string
  description: string
  categories: string
  tags: string[]
  keywords: string[]
  intensity: number
  is_bestseller: boolean
  scent_notes: {
    top: {
      items: string[]
      title: string
      description: string
    }
    middle: {
      items: string[]
      title: string
      description: string
    }
    base: {
      items: string[]
      title: string
      description: string
    }
  }
  profile: {
    depth: number
    warmth: number
    softness: number
    freshness: number
    sweetness: number
  }
  season: string[]
  recommended_places: {
    name: string
    imageUrl: string
    matchScore: number
    description: string
  }[]
  similar_scents: SimilarScentType[]
  thumbnail_url: string
  created_at: string
}

export type ResultResponse = {
  recommended_scent: RecommendedScent
}
