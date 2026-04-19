import EmptyStateImage from "@/assets/images/empty-state/empty-scent.svg"
import { CollectionCard } from "@/features/my-page/components"
import { mockFavoriteScents } from "@/features/my-page/mocks/favoriteScents.mock"
import { EmptyState } from "@/shared/components"

export default function CollectionSection() {
  const hasItems = mockFavoriteScents.length > 0

  return (
    <section>
      <h2 className="px-md text-center text-lg font-bold text-text-primary">
        저장된 향기{" "}
        <span className="text-text-highlight font-extrabold">
          {mockFavoriteScents.length}
        </span>
        개
      </h2>

      {hasItems ? (
        <div className="mt-md grid grid-cols-2 gap-lg">
          {mockFavoriteScents.map((item) => (
            <CollectionCard
              key={item.id}
              imageSrc={item.imageSrc}
              imageAlt={item.imageAlt}
              category={item.category}
              title={item.title}
              tags={item.tags}
              date={item.savedAt}
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
