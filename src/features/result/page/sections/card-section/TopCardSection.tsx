import EmptyStateImage from "@/assets/images/empty-state/empty-scent.svg"
import { EmptyState, Toast } from "@/shared/components"

import { usePostWebShare } from "@/features/result/hooks/usePostWebShare"
import type { ToastVariant } from "@/shared/components/toast"
import { useSaveAnalysisFeedbackMutation } from "@/shared/hooks/useSaveAnalysisFeedback"
import type { AnalysisResult, ResultType } from "@/shared/types"
import { useNavigate } from "@tanstack/react-router"
import { useState } from "react"
import ResultTopCard from "./result-card/ResultCard"

type TopCardSectionProps = {
  result?: AnalysisResult
  type: ResultType
}

const TopCardSection = ({ result, type }: TopCardSectionProps) => {
  const navigate = useNavigate()
  const [toast, setToast] = useState<{
    message: string
    variant: ToastVariant
  } | null>(null)
  const [shareFallbackUrl, setShareFallbackUrl] = useState("")

  const recommendedScent = result?.recommended_scent
  const matchScore = result?.match_score
  const isSaved = result?.is_saved ?? false

  const { mutate: saveFeedback, isPending } = useSaveAnalysisFeedbackMutation()
  const { mutate: postWebShareMutate, isPending: isSharePending } =
    usePostWebShare()

  if (!recommendedScent || !result) {
    return (
      <div className="mt-2xl flex justify-center">
        <EmptyState
          imageSrc={EmptyStateImage}
          title="추천 결과가 없어요"
          description="다시 향기 추천을 받아보세요"
          className="border-none"
        />
      </div>
    )
  }

  const handleClickDetail = () => {
    navigate({
      to: "/scent-detail",
      search: {
        id: recommendedScent.id,
      },
    })
  }

  const handleRetry = () => {
    navigate({
      to: "/find-scent",
    })
  }

  const handleToggleSave = () => {
    saveFeedback({
      id: result.id,
      type,
      status: !isSaved,
    })
  }

  const showToast = (message: string, variant: ToastVariant = "success") => {
    setToast({
      message,
      variant,
    })

    setTimeout(() => {
      setToast(null)
    }, 2000)
  }

  const handleClickShare = () => {
    postWebShareMutate(
      {
        resultId: result.id,
        type,
      },
      {
        onSuccess: async ({ share_id }) => {
          const webShareUrl = `${window.location.origin}/share/${share_id}`

          try {
            await navigator.clipboard.writeText(webShareUrl)
            setShareFallbackUrl("")
            showToast("공유 링크가 복사되었습니다")
          } catch {
            setShareFallbackUrl(webShareUrl)
            showToast("아래 링크를 직접 복사해주세요", "error")
          }
        },
        onError: () => {
          showToast("공유 링크 생성에 실패했습니다", "error")
        },
      }
    )
  }

  return (
    <section>
      {toast && (
        <div className="fixed left-1/2 top-xl z-50 w-[calc(100%-2rem)] max-w-[24rem] -translate-x-1/2">
          <Toast message={toast.message} variant={toast.variant} />
        </div>
      )}
      {shareFallbackUrl && (
        <div className="mb-md rounded-lg border border-border bg-card p-md">
          <label
            htmlFor="share-fallback-url"
            className="mb-xs block text-sm font-medium text-text-primary"
          >
            공유 링크
          </label>
          <input
            id="share-fallback-url"
            value={shareFallbackUrl}
            readOnly
            onFocus={(event) => event.currentTarget.select()}
            className="w-full rounded-md border border-border bg-surface-default px-sm py-xs text-sm text-text-sub outline-none focus:border-primary"
          />
        </div>
      )}
      <ResultTopCard
        engName={recommendedScent.eng_name}
        imageSrc={recommendedScent.thumbnail_url}
        imageAlt={recommendedScent.name}
        category={recommendedScent.categories}
        matchRate={matchScore ?? 0}
        title={recommendedScent.name}
        description={recommendedScent.description}
        tags={recommendedScent.tags.slice(0, 2)}
        isSavePending={isPending}
        onDetailClick={handleClickDetail}
        onRetryClick={handleRetry}
        onAddCollectionClick={handleToggleSave}
        onShareClick={handleClickShare}
        isSaved={isSaved}
        isSharePending={isSharePending}
      />
    </section>
  )
}

export default TopCardSection
