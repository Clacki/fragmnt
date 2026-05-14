import type {
  AnalysisResult,
  ChatbotAnalysisResult,
  ImageAnalysisResult,
  KeywordAnalysisResult,
  ResultType,
  SurveyAnalysisResult,
  UserInput,
} from "@/shared/types"
import { baseAnalysisResultMockData } from "./result-base-mock"

type CreateAnalysisResultMockParams = {
  id: number
  type: ResultType
  userInput?: UserInput[]
}

export const createAnalysisResultMock = ({
  id,
  type,
  userInput = [],
}: CreateAnalysisResultMockParams): AnalysisResult => {
  const base = {
    ...baseAnalysisResultMockData,
    id,
    type,
    created_at: new Date().toISOString(),
  }

  if (type === "survey") {
    return {
      ...base,
      type: "survey",
      user_input: userInput,
    } satisfies SurveyAnalysisResult
  }

  if (type === "keyword") {
    return {
      ...base,
      type: "keyword",
      user_input: userInput,
    } satisfies KeywordAnalysisResult
  }

  if (type === "image") {
    return {
      ...base,
      type: "image",
      presigned_image_url:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
      image_metadata: {
        id,
        dominant_color_hex: "#A3B18A",
        contrast_ratio: 4.5,
        avg_brightness: 0.72,
        avg_saturation: 0.38,
        is_failed: false,
        error_log: null,
      },
      ai_tags: ["자연", "편안함", "그린"],
      ai_keywords: ["식물", "환기", "싱그러움"],
      ai_intensity: 60,
      is_fallback: false,
    } satisfies ImageAnalysisResult
  }

  return {
    ...base,
    type: "chatbot",
    source_type: "chatbot",
    user_message: "요즘 지쳐서 편안하고 자연스러운 향을 찾고 있어요.",
    ai_keywords: ["휴식", "안정", "그린", "우디"],
  } satisfies ChatbotAnalysisResult
}
