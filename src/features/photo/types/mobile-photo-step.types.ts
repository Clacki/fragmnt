export type MobilePhotoStep = "select" | "camera" | "preview"

export type PostAnalysisUploadUrlRequest = {
  file_name: string
}

export type PostAnalysisUploadUrlResponse = {
  presigned_url: string
  img_url: string
  key: string
  resource_id: number
}
