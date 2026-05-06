import type { SurveyAnalysisResult } from "@/shared/types"
import { ClipboardList, Sparkles } from "lucide-react"

type SurveyAIContentProps = {
  result: SurveyAnalysisResult
}

const SurveyAIContent = ({ result }: SurveyAIContentProps) => {
  const { ai_comment, user_input } = result

  const surveyAnswers = Array.isArray(user_input) ? user_input : []

  return (
    <section aria-labelledby="survey-analysis-title" className="w-full py-xl">
      <div className="flex flex-col gap-lg rounded-2xl bg-green-input p-lg md:p-xl">
        <section
          aria-labelledby="survey-analysis-title"
          className="flex flex-col gap-lg rounded-xl bg-surface-default p-lg shadow-sm"
        >
          <header className="flex flex-col items-center gap-sm text-center md:flex-row md:items-start md:text-left">
            <span
              aria-hidden="true"
              className="flex size-9 shrink-0 items-center justify-center rounded-full bg-green-input text-primary"
            >
              <ClipboardList size={18} />
            </span>

            <div className="flex flex-col gap-2xs">
              <h3
                id="survey-analysis-title"
                className="text-md font-bold text-primary md:text-lg"
              >
                SURVEY RESPONSES
              </h3>

              <p className="break-keep text-sm text-text-sub">
                설문에서 선택한 답변을 바탕으로 향기 취향을 분석했어요.
              </p>
            </div>
          </header>

          {surveyAnswers.length > 0 && (
            <ol className="flex flex-col gap-md">
              {surveyAnswers.map((item, index) => (
                <li
                  key={`${item.title}-${item.answer}-${index}`}
                  className="rounded-2xl border border-border bg-green-input/60 p-md md:p-lg"
                >
                  <div className="flex items-start gap-md">
                    <span
                      aria-hidden="true"
                      className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white"
                    >
                      {index + 1}
                    </span>

                    <div className="min-w-0 flex-1">
                      <p className="break-keep text-md font-bold text-primary">
                        {item.title}
                      </p>

                      <p className="mt-xs break-keep text-sm text-text-sub">
                        선택한 답변
                      </p>

                      <p className="mt-xs inline-flex rounded-full bg-surface-default px-md py-xs text-sm font-semibold text-primary shadow-sm">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          )}
        </section>

        {ai_comment && (
          <section
            aria-labelledby="survey-analysis-summary-title"
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
                id="survey-analysis-summary-title"
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

export default SurveyAIContent
