import EmptyState from "@/shared/components/empty-state/EmptyState"
import LoadingState from "@/shared/components/loading-state/LoadingState"

import { useHistoryList } from "@/features/my-page/hooks/useHistoryList"
import { formatDate } from "@/shared/utils/date"
import HistoryCard from "./history-card/HistoryCard"

export default function HistorySection() {
  const { data: historyList = [], isLoading, error } = useHistoryList()
  const hasItems = historyList.length > 0

  if (isLoading) return <LoadingState />

  if (error) return <div>기록을 불러오지 못했어요.</div>

  return (
    <section>
      <h2 className="px-md text-right text-md font-bold text-text-primary">
        내 기록
        <span className="font-extrabold text-primary">
          {historyList.length}
        </span>
        개
      </h2>

      {hasItems ? (
        <div className="mt-md flex flex-col gap-md">
          {historyList.map((item) => (
            <HistoryCard
              key={item.id}
              imageSrc={item.recommended_scent.thumbnail_url}
              imageAlt={item.recommended_scent.name}
              title={item.recommended_scent.name}
              badgeText={item.type}
              tags={item.recommended_scent.tags}
              date={formatDate(item.created_at)}
              onClick={() => {
                console.log(`${item.recommended_scent.name} clicked`)
              }}
            />
          ))}
        </div>
      ) : (
        <div className="mt-2xl flex justify-center">
          <EmptyState
            imageSrc="/images/empty-history.png"
            title="아직 기록된 향기가 없어요"
            description="향 추천을 받고 나만의 기록을 남겨보세요"
          />
        </div>
      )}
    </section>
  )
}
