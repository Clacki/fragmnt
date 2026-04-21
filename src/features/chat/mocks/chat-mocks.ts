import ImageMock from "@/assets/images/mocks/scent-mock-01.jpg"
import type { ChatMessage } from "../types/message.types"

export const messages: ChatMessage[] = [
  {
    id: 1,
    role: "assistant",
    type: "text",
    text: "안녕하세요. 어떤 향을 찾고 계신가요?, 긴메세지 일경우를 테스트하기위한 메세지입니다 긴메시지는 어떤식으로 나올까요? 긴메세지 일경우를 테스트하기위한 메세지입니다 긴메시지는 어떤식으로 나올까요?",
  },
  {
    id: 2,
    role: "user",
    type: "text",
    text: "우디하고 차분한 느낌이 좋아요.",
  },
  {
    id: 3,
    role: "assistant",
    type: "text",
    text: "차분하고 우디한 무드에 어울리는 향을 추천드릴게요.",
  },
  {
    id: 4,
    role: "assistant",
    type: "recommendation",
    data: {
      id: "scent-1",
      imageSrc: ImageMock,
      imageAlt: "향수 추천 이미지",
      name: "히노키 나이트",
      englishName: "Hinoki Night",
      description:
        "일본 편백의 차분한 무드와 부드러운 우디 향이 어우러진 향기예요.",
      tags: ["차분한", "샌달가못", "우디"],
    },
  },
]
