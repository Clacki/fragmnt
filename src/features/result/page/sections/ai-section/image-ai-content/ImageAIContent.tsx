import { Container, Tag, Vstack } from "@/shared/components"
import type { ImageAnalysisResult } from "@/shared/types"
import { ImageIcon, Sparkles } from "lucide-react"

type ImageAIContentProps = {
  result: ImageAnalysisResult
}

const ImageAIContent = ({ result }: ImageAIContentProps) => {
  const { ai_comment, presigned_image_url, ai_keywords } = result

  const keywords = Array.isArray(ai_keywords) ? ai_keywords : []

  return (
    <section aria-labelledby="image-ai-analysis-title" className="w-full py-xl">
      <Container>
        <Vstack className="gap-lg">
          <article className="flex flex-col gap-lg rounded-2xl bg-green-input p-lg shadow-sm md:p-xl">
            <section
              aria-labelledby="image-analysis-summary-title"
              className="flex flex-col items-center gap-md rounded-xl bg-surface-default p-lg text-center shadow-sm md:flex-row md:items-center md:text-left"
            >
              <figure className="size-24 shrink-0 overflow-hidden rounded-xl border border-border bg-green-input shadow-sm md:size-28">
                <img
                  src={presigned_image_url}
                  alt="AI가 분석한 업로드 이미지"
                  className="size-full object-cover"
                />
              </figure>

              <div className="flex min-w-0 flex-1 flex-col items-center gap-sm md:items-start">
                <header className="space-y-xs">
                  <div className="flex items-center justify-center gap-sm md:justify-start">
                    <span
                      aria-hidden="true"
                      className="flex size-9 shrink-0 items-center justify-center rounded-full bg-green-input text-primary"
                    >
                      <ImageIcon size={18} />
                    </span>

                    <h4
                      id="image-analysis-summary-title"
                      className="break-keep text-md font-bold text-primary md:text-lg"
                    >
                      이미지 분석 요약
                    </h4>
                  </div>

                  <p className="break-keep text-sm text-text-sub">
                    이미지의 분위기와 색감, 장면 요소를 바탕으로 향기 무드를
                    분석했어요.
                  </p>
                </header>

                {keywords.length > 0 && (
                  <ul
                    className="flex flex-wrap justify-center gap-xs md:justify-start"
                    aria-label="이미지 분석 키워드"
                  >
                    {keywords.map((keyword) => (
                      <li key={keyword}>
                        <Tag
                          label={`#${keyword}`}
                          size="sm"
                          variant="selected"
                        />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>

            {ai_comment && (
              <section
                aria-labelledby="image-ai-comment-title"
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
                    id="image-ai-comment-title"
                    className="text-lg font-bold text-primary"
                  >
                    AI 분석 요약
                  </h5>

                  <p className="break-keep text-sm font-medium leading-relaxed text-primary md:text-md md:leading-loose">
                    {ai_comment}
                  </p>
                </div>
              </section>
            )}
          </article>
        </Vstack>
      </Container>
    </section>
  )
}

export default ImageAIContent
