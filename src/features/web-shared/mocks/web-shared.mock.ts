export const greenPauseWebSharedResult = {
  id: 1,
  recommended_scent: {
    name: "그린 포즈",
    eng_name: "Green Pause",
    description:
      "싱그러운 그린 노트와 부드러운 머스크가 어우러진 향으로, 바쁜 일상 속 잠깐의 휴식처럼 차분하고 깨끗한 분위기를 전합니다.",
    tags: ["싱그러운", "차분한", "깨끗한"],
    profile: {
      depth: 45,
      warmth: 35,
      softness: 72,
      freshness: 88,
      sweetness: 28,
    },
    scent_notes: {
      top: {
        title: "Top Note",
        description: "첫인상은 맑고 싱그러운 초록 잎의 느낌으로 시작돼요.",
        items: ["Bergamot", "Green Leaves", "Lemon"],
      },
      middle: {
        title: "Middle Note",
        description: "은은한 허브와 플로럴 무드가 차분하게 이어져요.",
        items: ["Tea", "Muguet", "Muguet Accord"],
      },
      base: {
        title: "Base Note",
        description: "부드러운 머스크와 우디함이 깨끗한 잔향을 남겨요.",
        items: ["Musk", "Cedarwood", "Soft Amber"],
      },
    },
    thumbnail_url: "/msw-image/green-pause.jpg",
  },
  created_at: new Date().toISOString(),
  ai_comment:
    "당신에게는 과하게 튀는 향보다, 맑고 차분하게 분위기를 정돈해주는 그린 계열의 향이 잘 어울려요. Green Pause는 싱그럽지만 가볍기만 하지는 않고, 부드러운 잔향으로 안정감을 남기는 향입니다.",
  match_score: 92,
}
