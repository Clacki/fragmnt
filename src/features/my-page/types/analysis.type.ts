// API 명세서에 맞는 타입 정의
export type GetAnalysesParams = {
  page: number
  size: number
}

export type Analysis = {
  analysis_id: number
  thumbnail_url: string | null
  recommended_scent: string
  created_at: string
}

export type GetAnalysesResponse = {
  data: {
    total_count: number
    total_pages: number
    current_page: number
    results: Analysis[]
  }
}
