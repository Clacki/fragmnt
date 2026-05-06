import type { KeywordAnalysisResult } from "@/shared/types"
import { Check, Hash, Sparkles } from "lucide-react"

type KeywordAIContentProps = {
  result: KeywordAnalysisResult
}

const KeywordAIContent = ({ result }: KeywordAIContentProps) => {
  const { ai_comment, user_input } = result

  const selectedKeywords = Array.isArray(user_input) ? user_input : []

  return (
    <section aria-labelledby="selected-keywords-title" className="w-full py-xl">
      <div className="flex flex-col gap-lg rounded-2xl bg-green-input p-lg md:p-xl">
        <section
          aria-labelledby="selected-keywords-title"
          className="flex flex-col gap-lg rounded-xl bg-surface-default p-lg shadow-sm"
        >
          <header className="flex flex-col items-center gap-sm text-center md:flex-row md:items-start md:text-left">
            <span
              aria-hidden="true"
              className="flex size-9 shrink-0 items-center justify-center rounded-full bg-green-input text-primary"
            >
              <Hash size={18} />
            </span>

            <div className="flex flex-col gap-2xs">
              <h3
                id="selected-keywords-title"
                className="text-md font-bold text-primary md:text-lg"
              >
                SELECTED KEYWORDS
              </h3>

              <p className="break-keep text-sm text-text-sub">
                선택한 키워드를 바탕으로 취향과 공간 분위기를 분석했어요.
              </p>
            </div>
          </header>

          {selectedKeywords.length > 0 && (
            <ul className="grid grid-cols-1 gap-md md:grid-cols-2">
              {selectedKeywords.map((keyword, index) => (
                <li
                  key={`${keyword.answer}-${index}`}
                  className="flex items-center justify-between gap-md rounded-2xl border border-border bg-green-input/60 px-md py-md md:px-lg"
                >
                  <div className="min-w-0">
                    {keyword.title && (
                      <p className="mb-2xs text-xs font-medium text-text-sub">
                        {keyword.title}
                      </p>
                    )}

                    <span className="break-keep text-md font-semibold text-primary">
                      #{keyword.answer}
                    </span>
                  </div>

                  <span
                    aria-hidden="true"
                    className="flex size-7 shrink-0 items-center justify-center rounded-full bg-surface-default text-primary shadow-sm"
                  >
                    <Check size={16} />
                  </span>
                </li>
              ))}
            </ul>
          )}
        </section>

        {ai_comment && (
          <section
            aria-labelledby="keyword-analysis-summary-title"
            className="flex flex-col items-center gap-md rounded-xl bg-surface-default p-lg text-center shadow-sm md:flex-row md:items-start md:text-left"
          >
            <span
              aria-hidden="true"
              className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-green-input text-primary"
            >
              <Sparkles size={22} />
            </span>

            <div className="flex flex-col gap-xs">
              <h4
                id="keyword-analysis-summary-title"
                className="text-lg font-bold text-primary"
              >
                AI 분석 요약
              </h4>

              <p className="whitespace-pre-line break-keep text-sm font-medium leading-relaxed text-primary md:text-md md:leading-loose">
                {ai_comment}
              </p>
            </div>
          </section>
        )}
      </div>
    </section>
  )
}

export default KeywordAIContent
