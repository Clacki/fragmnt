import { mockHistoryList } from "@/features/my-page/mocks/history.mock"
import EmptyState from "@/shared/components/empty-state/EmptyState"

import HistoryCard from "./history-card/HistoryCard"

export default function HistorySection() {
  const hasItems = mockHistoryList.length > 0

  return (
    <section>
      <h2 className="px-md text-right text-md font-bold text-text-primary">
        내 기록{" "}
        <span className="font-extrabold text-primary">
          {mockHistoryList.length}
        </span>
        개
      </h2>

      {hasItems ? (
        <div className="mt-md flex flex-col gap-md">
          {mockHistoryList.map((item) => (
            <HistoryCard key={item.id} {...item} />
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
