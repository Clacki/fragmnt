import EmptyStateImage from "@/assets/images/empty-state/empty-scent.svg"
import { EmptyState } from "@/shared/components"
import LoadingState from "@/shared/components/loading-state/LoadingState"
import { useFavoriteScents } from "../../../hooks/useFavoriteScents"
import CollectionCard from "./collection-card/CollectionCard"

export const CollectionSection = () => {
  const { error, favoriteScents, isLoading } = useFavoriteScents()

  const hasItems = favoriteScents.length > 0
  const collectionList = favoriteScents.map((item) => ({
    ...item,
    date: item.savedAt,
  }))

  if (isLoading) {
    return <LoadingState />
  }
  if (error) {
    return <div>저장된 향기를 불러오지 못했어요.</div>
  }

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
          {collectionList.map(({ id, ...item }) => (
            <CollectionCard key={id} {...item} />
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
