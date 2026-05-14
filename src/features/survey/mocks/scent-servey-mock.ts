import type { SurveyQuestion } from "@/features/survey/types/survey.types"

export const surveyQuestionMockData: SurveyQuestion[] = [
  {
    title: "숲속 산책의 향",
    additional: "나무와 흙내음 가득한 숲에서 느껴지는 향은 어떤가요?",
    left_label: "싱그러운",
    right_label: "묵직한",
    answer: [
      { content: "싱그러운" },
      { content: "약간 싱그러운" },
      { content: "보통" },
      { content: "약간 묵직한" },
      { content: "묵직한" },
    ],
  },
  {
    title: "달콤한 디저트의 향",
    additional: "바닐라나 초콜릿처럼 기분 좋은 달콤함은 어떤가요?",
    left_label: "달큰한",
    right_label: "진득한",
    answer: [
      { content: "달큰한" },
      { content: "약간 달큰한" },
      { content: "보통" },
      { content: "약간 진득한" },
      { content: "진득한" },
    ],
  },
  {
    title: "여름 바다의 향",
    additional: "시원한 파도와 소금기가 느껴지는 청량한 향은?",
    left_label: "차가운",
    right_label: "미지근한",
    answer: [
      { content: "차가운" },
      { content: "약간 차가운" },
      { content: "보통" },
      { content: "약간 미지근한" },
      { content: "미지근한" },
    ],
  },
  {
    title: "상큼한 시트러스의 향",
    additional: "오렌지나 레몬처럼 톡 쏘는 생동감을 원하시나요?",
    left_label: "톡 쏘는",
    right_label: "달콤상콤한",
    answer: [
      { content: "톡 쏘는" },
      { content: "약간 톡 쏘는" },
      { content: "보통" },
      { content: "약간 달콤상콤한" },
      { content: "달콤상콤한" },
    ],
  },
  {
    title: "업무 중 선호하는 향",
    additional: "집중이 필요한 시간에 어울리는 향은 무엇인가요?",
    left_label: "시원한",
    right_label: "따뜻한",
    answer: [
      { content: "시원한" },
      { content: "약간 시원한" },
      { content: "보통" },
      { content: "약간 따뜻한" },
      { content: "따뜻한" },
    ],
  },
]
