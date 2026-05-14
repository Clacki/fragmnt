import type { AnalysisResult } from "@/shared/types"
import AIEmptyCard from "./ai-card/AICard"
import ChatbotAIContent from "./chatbot-ai-content/ChatbotAISection"
import ImageAIContent from "./image-ai-content/ImageAIContent"
import KeywordAIContent from "./keyword-ai-content/KeywordAIContent"
import SurveyAIContent from "./survey-ai-content/SurveyAIContent"

type AISectionProps = {
  result: AnalysisResult
}
const hasArrayContent = (value?: unknown) => {
  return Array.isArray(value) && value.length > 0
}

const hasTextContent = (value?: unknown) => {
  return typeof value === "string" && value.trim().length > 0
}

const hasAIContent = (result: AnalysisResult) => {
  switch (result.type) {
    case "image":
      return (
        hasTextContent(result.ai_comment) ||
        hasTextContent(result.presigned_image_url) ||
        hasArrayContent(result.ai_tags) ||
        hasArrayContent(result.ai_keywords)
      )

    case "keyword":
    case "survey":
      return (
        hasTextContent(result.ai_comment) || hasArrayContent(result.user_input)
      )

    case "chatbot":
      return (
        hasTextContent(result.ai_comment) ||
        hasTextContent(result.user_message) ||
        hasArrayContent(result.ai_keywords)
      )

    default:
      return false
  }
}

const AISection = ({ result }: AISectionProps) => {
  if (!hasAIContent(result)) {
    return <AIEmptyCard></AIEmptyCard>
  }

  return (
    <section className="w-full pb-md">
      <header className="flex items-center gap-md">
        <div className="h-px flex-1 bg-border" />

        <h3
          id="image-ai-analysis-title"
          className="text-lg font-semibold tracking-[0.24em] text-text-sub"
        >
          ANALYSIS
        </h3>

        <div className="h-px flex-1 bg-border" />
      </header>
      {renderAIContent(result)}
    </section>
  )
}

const renderAIContent = (result: AnalysisResult) => {
  switch (result.type) {
    case "image":
      return <ImageAIContent result={result} />

    case "keyword":
      return <KeywordAIContent result={result} />

    case "survey":
      return <SurveyAIContent result={result} />

    case "chatbot":
      return <ChatbotAIContent result={result} />

    default:
      return null
  }
}

export default AISection
