import EmptyStateImage from "@/assets/images/empty-state/empty-scent.svg"
import { mockFavoriteScents } from "@/features/my-page/mocks/favoriteScents.mock"
import { EmptyState } from "@/shared/components"
import CollectionCard from "./collection-card/CollectionCard"

export default function CollectionSection() {
  const hasItems = mockFavoriteScents.length > 0
  const collectionList = mockFavoriteScents.map((item) => ({
    ...item,
    date: item.savedAt,
  }))

  return (
    <section>
      <h2 className="px-md text-center text-lg font-bold text-text-primary">
        저장된 향기{" "}
        <span className="font-extrabold text-text-highlight">
          {mockFavoriteScents.length}
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
