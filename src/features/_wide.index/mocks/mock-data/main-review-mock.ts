import type { ReviewInMain } from "../../types/main.api.type"

const imgUrls = [
  "/mock-images/amber-wood.jpg",
  "/mock-images/basil-shade.jpg",
  "/mock-images/bergamot-air.jpg",
  "/mock-images/blossom-dream.jpg",
  "/mock-images/cashmere-dust.jpg",
  "/mock-images/cedar-hour.jpg",
  "/mock-images/cherry-veil.jpg",
  "/mock-images/citrus-dawn.jpg",
  "/mock-images/cotton-veil.jpg",
  "/mock-images/fig-garden.jpg",
  "/mock-images/white-peony.jpg",
]

const reviewNames = [
  "민지",
  "서윤",
  "지훈",
  "하린",
  "도윤",
  "유나",
  "현우",
  "수빈",
  "지아",
  "태오",
  "나은",
]

const reviews = [
  "사진 분위기와 어울리는 향을 추천받을 수 있어서 신기했어요.",
  "제가 고른 키워드만으로 취향에 가까운 향이 나와서 만족스러웠습니다.",
  "평소 어떤 향을 좋아하는지 잘 몰랐는데 추천 결과가 도움이 됐어요.",
  "설문 흐름이 어렵지 않아서 처음 사용하는 사람도 편하게 쓸 수 있을 것 같아요.",
  "추천 결과를 저장해두고 나중에 다시 볼 수 있는 점이 좋았습니다.",
  "시트러스 계열을 좋아하는데 결과가 제 취향이랑 잘 맞았어요.",
  "챗봇으로 대화하듯 추천받는 방식이 자연스럽고 재미있었습니다.",
  "향 설명이 분위기 중심으로 정리되어 있어서 이해하기 쉬웠어요.",
  "친구에게 공유했더니 이미지랑 향 추천이 잘 어울린다고 하더라고요.",
  "선물용 향수를 고를 때 참고하기 좋은 서비스라고 느꼈습니다.",
  "추천 방식이 여러 가지라 상황에 맞게 선택할 수 있는 점이 좋았어요.",
]

export const MainReviewMock: ReviewInMain[] = Array.from(
  { length: 11 },
  (_, index) => ({
    id: index + 1,
    type: ["image", "keyword", "chat", "survey"][index % 4],
    thumbnail_url: imgUrls[index % imgUrls.length],
    name: reviewNames[index],
    created_at: new Date(Date.now() - index * 86400000).toISOString(),
    review: reviews[index],
  })
)
