// TODO: 스크롤하면서 로딩 (Network)

import Feather from "@/assets/images/scent-list/scent-feather.svg"
import { CenterContainer, Container, Hstack, Vstack } from "@/shared/components"

import LoadingState from "@/shared/components/loading-state/LoadingState"
import { useScentFilter } from "./hooks/useScentFilter"
import { useScentsQuery } from "./hooks/useScentQuery"
import { CardSection } from "./page/sections/card-section/CardSection"
import { ScentFilterPanel } from "./page/sections/tag-section/ScentFilterPanel"

export const ScentList = () => {
  const { data: scentCards = [], isLoading, isError, error } = useScentsQuery()

  const {
    selectedItems,
    toggleItem: handleToggleItem,
    clearAll: handleClearAll,
    filteredItems: filteredCards,
  } = useScentFilter(scentCards)

  return (
    <CenterContainer className="w-full">
      <Container
        width="xl"
        isPadded
        className="min-h-screen max-w-container-xl bg-surface-default"
      >
        <Vstack className="gap-xs pb-xl">
          <Hstack className="items-center justify-between pt-lg">
            <h1 className="text-xl font-bold text-text-primary">
              Scent Archive
            </h1>
            <img src={Feather} alt="Feather" />
          </Hstack>
          <p className="text-text-sub text-md flex items-center justify-center gap-xs">
            다양한 향기를 탐색하고 당신에게 맞는 향을 찾아보세요.
          </p>
        </Vstack>

        <ScentFilterPanel
          selectedItems={selectedItems}
          onToggleItem={handleToggleItem}
          onClearAll={handleClearAll}
          totalCount={filteredCards.length}
        />

        {isLoading ? (
          <LoadingState />
        ) : isError ? (
          <div className="py-2xl text-center text-error">
            {(error as Error).message || "향기 목록을 불러오지 못했습니다."}
          </div>
        ) : (
          <CardSection items={filteredCards} />
        )}
      </Container>
    </CenterContainer>
  )
}
