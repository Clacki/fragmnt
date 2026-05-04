export type ScentProfile = {
  depth: number
  warmth: number
  softness: number
  freshness: number
  sweetness: number
}

export type ScentNoteGroup = {
  items: string[]
  title: string
  description: string
}

export type ScentNotes = {
  top: ScentNoteGroup
  middle: ScentNoteGroup
  base: ScentNoteGroup
}

export type WebSharedScent = {
  name: string
  eng_name: string
  description: string
  tags: string[]
  profile: ScentProfile
  scent_notes: ScentNotes
  thumbnail_url: string
}

export type WebSharedResult = {
  id: number
  recommended_scent: WebSharedScent
  created_at: string
  ai_comment: string | null
  match_score: number | null
}

export type GetWebSharedParams = {
  shareId: string
}

export type GetWebSharedResponse = WebSharedResult

export type ScentFamily =
  | "floral"
  | "citrus"
  | "woody"
  | "musk"
  | "green"
  | "aquatic"
  | "spicy"
  | "powdery"

export type VisualTheme = {
  blobClassName: string
  lineClassName: string
  labelClassName: string
}

export type ScentAxisLabel = {
  positionClassName: string
  label: string
}
