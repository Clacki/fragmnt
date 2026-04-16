import { cn } from "@/lib/utils"

export type TabKey = "collection" | "history" | "review"

type TabItem = {
  key: TabKey
  label: string
}

type TabProps = {
  activeTab: TabKey
  onChange: (tab: TabKey) => void
  className?: string
}

const tabItems: TabItem[] = [
  { key: "collection", label: "컬렉션" },
  { key: "history", label: "내 기록" },
  { key: "review", label: "리뷰" },
]

const tabIndexMap: Record<TabKey, number> = {
  collection: 0,
  history: 1,
  review: 2,
}

export default function Tab({ activeTab, onChange, className }: TabProps) {
  const activeIndex = tabIndexMap[activeTab]

  return (
    <div
      className={cn(
        "relative w-full grid grid-cols-3 rounded-full bg-badge p-xs",
        className
      )}
    >
      {/* moving pill */}
      <div
        className="absolute top-xs left-xs h-[calc(100%-8px)] w-[calc(33.333%-4px)] rounded-full bg-white shadow-box transition-transform duration-300"
        style={{
          transform: `translateX(${activeIndex * 100}%)`,
        }}
      />

      {tabItems.map((tab) => {
        const isActive = activeTab === tab.key

        return (
          <button
            key={tab.key}
            type="button"
            onClick={() => onChange(tab.key)}
            className={cn(
              "relative z-10 rounded-full px-md py-sm text-sm font-semibold transition-colors",
              isActive
                ? "text-text-primary"
                : "text-text-disabled hover:text-text-primary"
            )}
          >
            {tab.label}
          </button>
        )
      })}
    </div>
  )
}
