export type KeywordDivision =
  | "Place"
  | "MD"
  | "Texture"
  | "Time & Season"
  | "Scent Notes"

export type KeywordQuestion = {
  keyword_id: number
  keyword_division: KeywordDivision
  keyword_name: string
}
