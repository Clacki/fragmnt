import { baseAnalysisResultMockData } from "@/features/result/mock/result-base-mock"
import { saveAnalysisResult } from "@/features/result/mock/result.store"
import { delay, http, HttpResponse } from "msw"
import type { CreateChatSessionResponse } from "../api/create-chat-session.api"
import type {
  ChatRecommendationResult,
  ChatRecommendationResultResponse,
  GetScentDetailResponse,
  SendChatMessageResponse,
} from "../types/message.types"
import type { RetryChatRecommendationResponse } from "../types/retry-chat.types"

type SendChatMessageRequest = {
  message?: string
}

const followUpReplies = [
  "좋아요. 평소에는 산뜻한 향과 포근한 향 중 어느 쪽을 더 좋아하세요?",
  "그럼 사용할 상황도 같이 보면 좋겠어요. 데일리용인가요, 특별한 날용인가요?",
  "좋아요. 너무 달달한 향은 괜찮으세요, 아니면 피하고 싶으세요?",
  "말씀해주신 느낌이면 방향이 잡히고 있어요. 조금 더 가벼운 쪽이 좋을까요?",
]

const recommendationComments = [
  "말씀해주신 분위기라면 이 향이 잘 맞을 것 같아요.",
  "이런 무드라면 저는 이 향을 먼저 추천드릴게요.",
  "지금 이야기해주신 취향에는 이 향이 꽤 잘 어울려요.",
  "너무 튀지 않으면서도 분위기 있는 향으로 골라봤어요.",
]

const retryComments = [
  "좋아요. 이번엔 조금 다른 결로 골라봤어요.",
  "이번에는 좀 더 부드러운 쪽으로 다시 추천드릴게요.",
  "그럼 이번엔 부담이 덜한 향으로 바꿔볼게요.",
  "좋아요. 이전 추천보다 조금 더 산뜻한 느낌으로 골라봤어요.",
]

const chatRecommendationResults = new Map<number, ChatRecommendationResult>()
const chatMessageCountMap = new Map<number, number>()
const chatLastUserMessageMap = new Map<number, string>()

let sessionId = 1
let recommendationId = 1
let retryCount = 0

const getRandomItem = <T>(items: T[]) => {
  const randomIndex = Math.floor(Math.random() * items.length)

  return items[randomIndex]
}

const createChatRecommendationResult = ({
  id,
  aiComment,
  userMessage,
}: {
  id: number
  aiComment: string
  userMessage: string
}): ChatRecommendationResult => ({
  id,
  type: "chatbot",
  recommended_scent: baseAnalysisResultMockData.recommended_scent,
  ai_comment: aiComment,
  match_score: baseAnalysisResultMockData.match_score,
  source_type: "chatbot",
  user_message: userMessage,
  ai_keywords: ["대화", "취향", "추천"],
  is_saved: baseAnalysisResultMockData.is_saved,
  created_at: new Date().toISOString(),
})

export const chatbotHandlers = [
  http.post("*/chatbot/sessions", async () => {
    await delay(300)

    const nextSessionId = sessionId++

    chatMessageCountMap.set(nextSessionId, 0)

    const response: CreateChatSessionResponse = {
      status: "success",
      data: {
        id: nextSessionId,
        status: "active",
        created_at: new Date().toISOString(),
      },
    }

    return HttpResponse.json(response)
  }),

  http.post(
    "*/chatbot/sessions/:sessionId/messages",
    async ({ request, params }) => {
      await delay(700)

      const currentSessionId = Number(params.sessionId)
      const body = (await request.json()) as SendChatMessageRequest
      const message = body.message ?? ""

      const prevCount = chatMessageCountMap.get(currentSessionId) ?? 0
      const nextCount = prevCount + 1

      chatMessageCountMap.set(currentSessionId, nextCount)
      chatLastUserMessageMap.set(currentSessionId, message)

      const shouldRecommend =
        nextCount >= 3 ||
        message.includes("추천해줘") ||
        message.includes("바로 추천")

      if (!shouldRecommend) {
        const response: SendChatMessageResponse = {
          status: "success",
          data: {
            ai_comment: getRandomItem(followUpReplies),
            is_recommendation: false,
            recommendation_id: null,
            scent_id: null,
            source_type: "chat",
          },
        }

        return HttpResponse.json(response)
      }

      const nextRecommendationId = recommendationId++
      const aiComment = getRandomItem(recommendationComments)

      const result = createChatRecommendationResult({
        id: nextRecommendationId,
        aiComment,
        userMessage: message,
      })

      chatRecommendationResults.set(nextRecommendationId, result)
      saveAnalysisResult(result)

      const response: SendChatMessageResponse = {
        status: "success",
        data: {
          ai_comment: aiComment,
          is_recommendation: true,
          recommendation_id: nextRecommendationId,
          scent_id: baseAnalysisResultMockData.recommended_scent.id,
          source_type: "chat",
        },
      }

      return HttpResponse.json(response)
    }
  ),

  http.post(
    "*/chatbot/sessions/:sessionId/recommendations/retry",
    async ({ params }) => {
      await delay(900)

      const currentSessionId = Number(params.sessionId)
      retryCount += 1

      const nextRecommendationId = recommendationId++
      const aiComment = getRandomItem(retryComments)
      const userMessage = chatLastUserMessageMap.get(currentSessionId) ?? ""

      const result = createChatRecommendationResult({
        id: nextRecommendationId,
        aiComment,
        userMessage,
      })

      chatRecommendationResults.set(nextRecommendationId, result)
      saveAnalysisResult(result)

      const response: RetryChatRecommendationResponse = {
        status: "success",
        data: {
          ai_comment: aiComment,
          recommendation_id: nextRecommendationId,
          scent_id: baseAnalysisResultMockData.recommended_scent.id,
          retry_count: retryCount,
          source_type: "chatbot",
        },
      }

      return HttpResponse.json(response)
    }
  ),

  http.get("*/scents/:scentId", ({ params }) => {
    const scentId = Number(params.scentId)
    const scent = baseAnalysisResultMockData.recommended_scent

    if (scent.id !== scentId) {
      return HttpResponse.json(
        { message: "향기 정보를 찾을 수 없습니다." },
        { status: 404 }
      )
    }

    const response: GetScentDetailResponse = {
      status: "success",
      data: {
        id: scent.id,
        name: scent.name,
        eng_name: scent.eng_name,
        description: scent.description,
        tags: scent.tags,
        thumbnail_url: scent.thumbnail_url,
      },
    }

    return HttpResponse.json(response)
  }),

  http.get(
    "*/chatbot/sessions/:sessionId/recommendations/:recommendationId",
    ({ params }) => {
      const id = Number(params.recommendationId)
      const result = chatRecommendationResults.get(id)

      if (!result) {
        return HttpResponse.json(
          { message: "추천 결과를 찾을 수 없습니다." },
          { status: 404 }
        )
      }

      const response: ChatRecommendationResultResponse = {
        status: "success",
        data: result,
      }

      return HttpResponse.json(response)
    }
  ),
]
