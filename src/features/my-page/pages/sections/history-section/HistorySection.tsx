import EmptyStateImage from "@/assets/images/empty-state/empty-scent.svg"
import EmptyState from "@/shared/components/empty-state/EmptyState"
import LoadingState from "@/shared/components/loading-state/LoadingState"

import { useHistoryList } from "@/features/my-page/hooks/useHistoryList"
import { mapAnalysisType } from "@/features/my-page/utils/mapAnalysisType"
import { formatDate } from "@/shared/utils/date"
import { useNavigate } from "@tanstack/react-router"
import HistoryCard from "./history-card/HistoryCard"

export const HistorySection = () => {
  const navigate = useNavigate()

  const { data: historyList = [], isLoading, error } = useHistoryList()
  const hasItems = historyList.length > 0

  if (isLoading) return <LoadingState />
  if (error) return <div>기록을 불러오지 못했어요.</div>

  return (
    <section>
      <h2 className="px-md text-right text-md font-bold text-text-primary">
        {"내 기록 "}
        <span className="font-extrabold text-primary">
          {historyList.length}
        </span>
        개
      </h2>

      {hasItems ? (
        <div className="mt-md flex flex-col gap-md">
          {historyList.map((item) => (
            <HistoryCard
              key={`${item.type}-${item.id}`}
              imageSrc={item.recommended_scent.thumbnail_url}
              imageAlt={item.recommended_scent.name}
              title={item.recommended_scent.name}
              badgeText={mapAnalysisType(item.type)}
              tags={item.recommended_scent.tags}
              date={formatDate(item.created_at)}
              onClick={() => {
                navigate({
                  to: "/find-scent/result/$resultId",
                  params: {
                    resultId: String(item.id),
                  },
                  search: { type: item.type },
                })
              }}
            />
          ))}
        </div>
      ) : (
        <div className="mt-2xl flex justify-center">
          <EmptyState
            imageSrc={EmptyStateImage}
            title="아직 기록된 향기가 없어요"
            description="향 추천을 받고 나만의 기록을 남겨보세요"
          />
        </div>
      )}
    </section>
  )
}
