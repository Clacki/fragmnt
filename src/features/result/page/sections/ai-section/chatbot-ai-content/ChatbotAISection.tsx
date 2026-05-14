import { Tag } from "@/shared/components"
import type { ChatbotAnalysisResult } from "@/shared/types"
import { MessageCircle, Quote, Sparkles, Tags } from "lucide-react"

type ChatbotAIContentProps = {
  result: ChatbotAnalysisResult
}

const ChatbotAIContent = ({ result }: ChatbotAIContentProps) => {
  const { ai_comment, user_message, ai_keywords } = result

  const keywords = Array.isArray(ai_keywords) ? ai_keywords : []
  const userMessages =
    typeof user_message === "string" && user_message.trim().length > 0
      ? [user_message]
      : []
  const hasUserMessage = userMessages.length > 0

  return (
    <section
      aria-labelledby="chatbot-ai-section-title"
      className="w-full py-xl"
    >
      <div className="flex flex-col gap-lg">
        <article
          aria-labelledby="conversation-analysis-title"
          className="w-full rounded-2xl bg-green-input p-lg md:p-xl"
        >
          <div className="flex w-full flex-col gap-lg">
            <header className="flex flex-col items-center gap-sm text-center md:flex-row md:text-left">
              <MessageCircle size={22} className="text-primary" />

              <h4
                id="conversation-analysis-title"
                className="text-md font-semibold text-primary md:text-lg"
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
                      <blockquote className="relative rounded-2xl border border-border bg-green-input/50 px-md py-md md:px-xl md:py-lg">
                        <Quote
                          size={20}
                          className="absolute left-md top-md text-primary md:left-lg md:size-6"
                        />

                        <p className="break-keep pl-xl text-sm italic leading-relaxed text-primary md:pl-2xl md:text-md">
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
                className="space-y-md rounded-xl bg-surface-default p-lg text-center shadow-sm md:text-left"
              >
                <header className="flex items-center justify-center gap-sm md:justify-start">
                  <Tags size={22} className="text-primary" />

                  <h5
                    id="analyzed-keywords-title"
                    className="text-md font-semibold text-primary md:text-lg"
                  >
                    ANALYZED KEYWORDS
                  </h5>
                </header>

                <ul className="flex flex-wrap justify-center gap-sm md:justify-start">
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
                className="flex flex-col items-center gap-md rounded-xl bg-surface-default p-lg text-center shadow-sm md:flex-row md:items-start md:text-left"
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

                  <p className="whitespace-pre-line break-keep text-sm font-medium leading-relaxed text-primary md:text-md md:leading-loose">
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
