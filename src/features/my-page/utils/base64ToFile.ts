export const base64ToFile = (base64: string, filename: string): File => {
  const arr = base64.split(",")

  if (arr.length < 2) {
    throw new Error("유효하지 않은 base64 형식입니다.")
  }

  let mime = arr[0].match(/:(.*?);/)?.[1] ?? "image/jpeg"

  if (mime === "image/jpg") {
    mime = "image/jpeg"
  }

  const bstr = atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }

  return new File([u8arr], filename, {
    type: mime,
  })
}
