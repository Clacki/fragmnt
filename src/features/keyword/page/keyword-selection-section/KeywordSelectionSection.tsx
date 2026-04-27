import { Tag } from "@/shared/components"
import type {
  KeywordQuestion,
  SelectedKeyword,
} from "../../types/keyword-questions.types"

type KeywordSelectionSectionProps = {
  questions: KeywordQuestion[]
  selectedKeywords: SelectedKeyword[]
  onToggleKeyword: (keyword: SelectedKeyword) => void
}

const divisionTitleMap: Record<string, string> = {
  Place: "공간",
  MD: "무드",
  Texture: "질감",
  "Time & Season": "시간과 계절",
  "Scent Notes": "향 노트",
}

const KeywordSelectionSection = ({
  questions,
  selectedKeywords,
  onToggleKeyword,
}: KeywordSelectionSectionProps) => {
  const groupedQuestions = questions.reduce<Record<string, KeywordQuestion[]>>(
    (acc, question) => {
      if (!acc[question.keyword_division]) {
        acc[question.keyword_division] = []
      }

      acc[question.keyword_division].push(question)
      return acc
    },
    {}
  )

  const isSelectedKeyword = (keywordId: number) => {
    return selectedKeywords.some(
      (selectedKeyword) => selectedKeyword.keywordId === keywordId
    )
  }

  return (
    <article className="pt-2xl">
      <h3 className="pb-md text-md font-bold text-text-primary">
        카테고리별 원하는 키워드를 선택해주세요
      </h3>

      <div>
        {Object.entries(groupedQuestions).map(([division, keywords]) => {
          return (
            <section key={division} className="flex flex-col gap-md pb-lg">
              <h4 className="text-lg font-extrabold text-primary">
                {divisionTitleMap[division] ?? division}
              </h4>

              <div className="flex flex-wrap gap-xs">
                {keywords.map((keyword) => {
                  const isSelected = isSelectedKeyword(keyword.keyword_id)

                  return (
                    <Tag
                      key={keyword.keyword_id}
                      size="sm"
                      label={keyword.keyword_name}
                      variant={isSelected ? "selected" : "outlined"}
                      onClick={() => {
                        onToggleKeyword({
                          keywordId: keyword.keyword_id,
                          keywordName: keyword.keyword_name,
                          keywordDivision: keyword.keyword_division,
                        })
                      }}
                    />
                  )
                })}
              </div>
            </section>
          )
        })}
      </div>
    </article>
  )
}

export default KeywordSelectionSection
