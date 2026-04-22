import { Tag } from "@/shared/components"
import { scentKeywordMockData } from "../../mocks/scent-keyword-mock-data"
import type { SelectedKeyword } from "../ScentKeyword"

type KeywordSelectionSectionProps = {
  selectedKeywords: SelectedKeyword[]
  onToggleKeyword: (keyword: SelectedKeyword) => void
}

const KeywordSelectionSection = ({
  selectedKeywords,
  onToggleKeyword,
}: KeywordSelectionSectionProps) => {
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
        {scentKeywordMockData.map((section) => {
          return (
            <section
              key={section.keywordDivision}
              className="flex flex-col gap-md pb-lg"
            >
              <h4 className="text-lg font-extrabold text-primary">
                {section.title}
              </h4>

              <div className="flex flex-wrap gap-xs">
                {section.keywords.map((keyword) => {
                  const isSelected = isSelectedKeyword(keyword.keywordId)

                  return (
                    <Tag
                      key={keyword.keywordId}
                      size="sm"
                      label={keyword.keywordName}
                      variant={isSelected ? "selected" : "outlined"}
                      onClick={() => {
                        onToggleKeyword({
                          keywordId: keyword.keywordId,
                          keywordName: keyword.keywordName,
                          keywordDivision: section.keywordDivision,
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
