import { Tag } from "@/shared/components"
import type { ChatbotAnalysisResult } from "@/shared/types"
import { MessageCircle, Quote, Sparkles, Tags } from "lucide-react"

type ChatbotAIContentProps = {
  result: ChatbotAnalysisResult
}

const ChatbotAIContent = ({ result }: ChatbotAIContentProps) => {
  const { ai_comment, user_message, ai_keywords } = result

  const keywords = Array.isArray(ai_keywords) ? ai_keywords : []
  const userMessages = Array.isArray(user_message) ? user_message : []
  const hasUserMessage = userMessages.length > 0

  return (
    <section
      aria-labelledby="chatbot-ai-section-title"
      className="w-full py-xl"
    >
      <div className="flex flex-col gap-lg">
        <article
          aria-labelledby="conversation-analysis-title"
          className="w-full rounded-2xl bg-green-input p-xl"
        >
          <div className="flex w-full flex-col gap-lg">
            <header className="flex items-center gap-sm">
              <MessageCircle size={22} className="text-primary" />

              <h4
                id="conversation-analysis-title"
                className="text-lg font-semibold text-primary"
              >
                CONVERSATION ANALYSIS
              </h4>
            </header>

            {hasUserMessage && (
              <section
                aria-labelledby="user-message-title"
                className="flex flex-col gap-md rounded-xl bg-surface-default p-lg shadow-sm"
              >
                <h5 id="user-message-title" className="sr-only">
                  사용자 대화 내용
                </h5>

                <ul
                  className="flex flex-col gap-md"
                  aria-label="사용자 대화 내용"
                >
                  {userMessages.map((message, index) => (
                    <li key={`${message}-${index}`}>
                      <blockquote className="relative rounded-2xl border border-border bg-green-input/50 px-xl py-lg">
                        <Quote
                          size={24}
                          className="absolute left-lg top-md text-primary"
                        />

                        <p className="break-keep pl-2xl text-md italic leading-relaxed text-primary">
                          “{message}”
                        </p>
                      </blockquote>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {keywords.length > 0 && (
              <section
                aria-labelledby="analyzed-keywords-title"
                className="space-y-md rounded-xl bg-surface-default p-lg shadow-sm"
              >
                <header className="flex items-center gap-sm">
                  <Tags size={22} className="text-primary" />

                  <h5
                    id="analyzed-keywords-title"
                    className="text-lg font-semibold text-primary"
                  >
                    ANALYZED KEYWORDS
                  </h5>
                </header>

                <ul className="flex flex-wrap gap-sm">
                  {keywords.map((keyword) => (
                    <li key={keyword}>
                      <Tag label={`# ${keyword}`} size="sm" variant="soft" />
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {ai_comment && (
              <section
                aria-labelledby="chatbot-ai-comment-title"
                className="flex flex-col gap-md rounded-xl bg-surface-default p-lg shadow-sm md:flex-row"
              >
                <span
                  aria-hidden="true"
                  className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-green-input text-primary"
                >
                  <Sparkles size={22} />
                </span>

                <div className="flex flex-col gap-xs">
                  <h5
                    id="chatbot-ai-comment-title"
                    className="text-lg font-bold text-primary"
                  >
                    AI 분석 요약
                  </h5>

                  <p className="whitespace-pre-line break-keep text-md font-medium leading-loose text-primary">
                    {ai_comment}
                  </p>
                </div>
              </section>
            )}
          </div>
        </article>
      </div>
    </section>
  )
}

export default ChatbotAIContent
