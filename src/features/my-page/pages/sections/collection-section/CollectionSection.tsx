import EmptyStateImage from "@/assets/images/empty-state/empty-scent.svg"
import { useUpdateFavoriteScent } from "@/features/my-page/hooks/useUpdateFavoriteScent"
import { EmptyState, Toast } from "@/shared/components"
import LoadingState from "@/shared/components/loading-state/LoadingState"
import { formatDate } from "@/shared/utils/date"
import { useNavigate } from "@tanstack/react-router"
import { useState } from "react"
import { useFavoriteScents } from "../../../hooks/useFavoriteScents"
import CollectionCard from "./collection-card/CollectionCard"

export const CollectionSection = () => {
  const navigate = useNavigate()
  const { error, favoriteScents = [], isLoading } = useFavoriteScents()
  const { mutate: updateFavorite } = useUpdateFavoriteScent()

  const [toast, setToast] = useState<{
    message: string
    variant: "success" | "error"
  } | null>(null)

  const handleDelete = (
    id: number,
    type: "image" | "chatbot" | "keyword" | "survey"
  ) => {
    updateFavorite(
      {
        id,
        status: false,
        type,
      },
      {
        onSuccess: () => {
          setToast({
            message: "저장된 향기를 삭제했어요.",
            variant: "success",
          })
          setTimeout(() => setToast(null), 2000)
        },
        onError: () => {
          setToast({
            message: "삭제에 실패했어요.",
            variant: "error",
          })
          setTimeout(() => setToast(null), 2000)
        },
      }
    )
  }

  if (isLoading) {
    return <LoadingState />
  }

  if (error) {
    return (
      <div>
        <EmptyState
          imageSrc={EmptyStateImage}
          title="리뷰를 불러오지 못했습니다."
          description="잠시 후 다시 시도해주세요!"
        />
      </div>
    )
  }

  const hasItems = favoriteScents.length > 0

  return (
    <>
      {toast && (
        <div className="fixed bottom-20 left-1/2 z-50 -translate-x-1/2">
          <Toast message={toast.message} variant={toast.variant} />
        </div>
      )}
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
                onDelete={() => handleDelete(item.id, item.type)}
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
    </>
  )
}
