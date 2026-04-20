import Feather from "@/assets/images/scent-list/Feather.svg"
import { CenterContainer, Container, Hstack, Vstack } from "@/shared/components"

import { useScentFilter } from "../hooks/useScentFilter"
import { scentCardMockData } from "../mocks/scent-card.mock"
import CardSection from "./sections/card-section/CardSection"
import ScentFilterPanel from "./sections/tag-section/ScentFilterPanel"

export default function ScentList() {
  const {
    selectedItems,
    toggleItem: handleToggleItem,
    clearAll: handleClearAll,
    filteredItems: filteredCards,
  } = useScentFilter(scentCardMockData)

  return (
    <CenterContainer className="w-full py-2xl">
      <Container
        width="xl"
        isPadded
        className="min-h-screen max-w-container-xl bg-surface-default"
      >
        {/* 상단 헤더 */}
        <Vstack className="gap-xs pb-xl">
          <Hstack className="items-center justify-between pt-lg">
            <h1 className="text-xl font-bold text-text-primary">
              Scent Archive
            </h1>
            <img src={Feather} alt="Feather" />
          </Hstack>
          <p className="text-text-sub text-md items-center justify-center gap-xs flex">
            다양한 향기를 탐색하고 당신에게 맞는 향을 찾아보세요.
          </p>
        </Vstack>

        {/* 필터 패널 */}
        <ScentFilterPanel
          selectedItems={selectedItems}
          onToggleItem={handleToggleItem}
          onClearAll={handleClearAll}
        />

        {/* 향기 목록 */}
        <CardSection items={filteredCards} />
      </Container>
    </CenterContainer>
  )
}
