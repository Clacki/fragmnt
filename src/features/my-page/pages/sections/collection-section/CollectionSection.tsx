import EmptyStateImage from "@/assets/images/empty-state/empty-scent.svg"
import { EmptyState } from "@/shared/components"
import LoadingState from "@/shared/components/loading-state/LoadingState"
import { formatDate } from "@/shared/utils/date"
import { useNavigate } from "@tanstack/react-router"
import { useFavoriteScents } from "../../../hooks/useFavoriteScents"
import CollectionCard from "./collection-card/CollectionCard"

export const CollectionSection = () => {
  const navigate = useNavigate()
  const { error, favoriteScents = [], isLoading } = useFavoriteScents()

  if (isLoading) {
    return <LoadingState />
  }

  if (error) {
    return <div>저장된 향기를 불러오지 못했어요.</div>
  }

  const hasItems = favoriteScents.length > 0

  return (
    <section>
      <h2 className="px-md text-center text-lg font-bold text-text-primary">
        {"저장된 향기 "}
        <span className="font-extrabold text-text-highlight">
          {favoriteScents.length}
        </span>
        개
      </h2>

      {hasItems ? (
        <div className="mt-md grid grid-cols-2 gap-lg">
          {favoriteScents.map((item) => (
            <CollectionCard
              key={item.id}
              imageSrc={item.scent.thumbnail_url}
              imageAlt={item.scent.name}
              category={item.scent.categories}
              title={item.scent.name}
              tags={item.scent.tags ?? []}
              date={formatDate(item.created_at)}
              onClick={() => {
                navigate({
                  to: "/scent-detail",
                  search: {
                    id: item.scent.id,
                  },
                })
              }}
            />
          ))}
        </div>
      ) : (
        <div className="mt-2xl flex justify-center">
          <EmptyState
            imageSrc={EmptyStateImage}
            title="저장된 향기가 없어요"
            description="마음에 드는 향기를 저장해보세요"
            className="border-none"
          />
        </div>
      )}
    </section>
  )
}
