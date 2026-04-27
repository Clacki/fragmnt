import type { ReviewInMain } from "../../types/main.api.type"

const imgUrls = [
  "https://placehold.co/600x400",
  "https://placehold.co/400",
  "https://placehold.co/600x400/000000/FFF",
]

const reviews = [
  "정말 좋아요! 향이 오래 지속됩니다.",
  "제 skin과 잘 맞습니다. 강추!",
  "남자친구에게 선물했더니 너무 좋아해요.",
  "첫 향이 살짝 느끼했는데 가라 앉으니 너무 좋습니다.",
  "가격 대비 만족스러워요. 재구매 의사 있습니다.",
  "산뜻한 향이라 일상에서 쓰기 좋아요.",
  "좋은 향입니다.身边的人都说好闻",
  "여름에 쓰기 좋은 시트러스 향이네요.",
  "包装精美，送人也很合适。",
  "드라마에서 봐서 샀는데 기대 이상입니다.",
  "학교장에서 쓰기엔 좀 강한 편이에요.",
]

export const MainReviewMock: ReviewInMain[] = Array.from(
  { length: 11 },
  (_, index) => ({
    id: index,
    thumbnail_url: imgUrls[index % imgUrls.length],
    name: `더미유저${index + 1}`,
    created_at: new Date(Date.now() - index * 86400000).toISOString(),
    review: reviews[index % reviews.length],
  })
)
