import EmptyStateImage from "@/assets/images/empty-state/empty-scent.svg"
import { ArchiveCard, EmptyState } from "@/shared/components"
import { useNavigate } from "@tanstack/react-router"
import type { ScentCardItem } from "../../../types/scent-card.type"

type CardSectionProps = {
  items: ScentCardItem[]
}

export const CardSection = ({ items }: CardSectionProps) => {
  const navigate = useNavigate()
  console.log("CardSection items", items)

  if (items.length === 0) {
    return (
      <EmptyState
        imageSrc={EmptyStateImage}
        title="조건에 맞는 향기 목록을 불러올 수 없습니다."
        description="필터 설정을 변경하거나 나중에 다시 시도해보세요."
        className="border-none"
      />
    )
  }

  return (
    <section className="grid grid-cols-1 gap-lg pt-2xl sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <ArchiveCard
          key={item.id}
          imageSrc={item.imageUrl}
          imageAlt={item.name}
          tags={item.tags}
          title={item.name}
          description={item.description}
          onClick={() =>
            navigate({
              to: "/scent-detail",
              search: { id: item.id },
            })
          }
        />
      ))}
    </section>
  )
}
