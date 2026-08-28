export const MAX_IMAGE_FILE_SIZE = 2 * 1024 * 1024

const SUPPORTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"]

export const validateImageFile = (file: File): string | null => {
  if (!SUPPORTED_IMAGE_TYPES.includes(file.type)) {
    return "JPG, PNG, WEBP 형식의 이미지만 사용할 수 있어요."
  }

  if (file.size > MAX_IMAGE_FILE_SIZE) {
    return "이미지는 2MB 이하로 선택해주세요."
  }

  return null
}
