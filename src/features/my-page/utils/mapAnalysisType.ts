export const mapAnalysisType = (type: string) => {
  switch (type) {
    case "image":
      return "사진 추천"
    case "survey":
      return "설문 추천"
    case "keyword":
      return "키워드 추천"
    case "chatbot":
      return "챗봇 추천"
    default:
      return "향 추천"
  }
}
