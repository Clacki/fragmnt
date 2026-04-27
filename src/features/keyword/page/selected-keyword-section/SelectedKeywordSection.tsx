import { Tag } from "@/shared/components"
import type { SelectedKeyword } from "../../types/keyword-questions.types"

type SelectedKeywordSectionProps = {
  selectedKeywords: SelectedKeyword[]
  onToggleKeyword: (keyword: SelectedKeyword) => void
  onClearKeywords: () => void
}

const SelectedKeywordSection = ({
  selectedKeywords,
  onToggleKeyword,
  onClearKeywords,
}: SelectedKeywordSectionProps) => {
  const hasSelectedKeywords = selectedKeywords.length > 0

  return (
    <article className="w-full">
      <div className="w-full rounded-lg border border-green-input bg-white p-lg">
        <div className="flex justify-between pb-md text-text-sub">
          <p>최소 3개의 키워드를 선택해주세요</p>

          {hasSelectedKeywords && (
            <button
              type="button"
              onClick={onClearKeywords}
              className="text-sm transition-colors hover:cursor-pointer hover:text-text-primary"
            >
              All Clear
            </button>
          )}
        </div>

        {hasSelectedKeywords && (
          <div className="flex flex-wrap gap-sm">
            {selectedKeywords.map((keyword) => {
              return (
                <Tag
                  key={keyword.keywordId}
                  size="sm"
                  label={keyword.keywordName}
                  variant="selected"
                  onClick={() => {
                    onToggleKeyword(keyword)
                  }}
                />
              )
            })}
          </div>
        )}
      </div>
    </article>
  )
}

export default SelectedKeywordSection
