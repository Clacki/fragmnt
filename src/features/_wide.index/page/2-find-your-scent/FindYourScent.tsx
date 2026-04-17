import HOrVStack from "@/shared/components/layouts/HOrVStack/HOrVStack"
import SectionVstack from "../section-container/SectionContainer"

const FindYourScent = () => {
  // TODO: 뷰포트 좁아지면 그리드를 Vstack으로 바꿔야 함
  // TODO: 이 때는 세로로 긴 상자 없이 둘 다 글 왼쪽 그림 오른쪽으로 배치해야
  return (
    <SectionVstack>
      <p>나만의 향기를 발견하는 세 가지 방법</p>
      <h1>당신만의 향기를 발견해 보세요</h1>
      <p>가장 편안한 방식으로 당신의 취향을 찾아보세요.</p>

      <HOrVStack>
        <div className="bg-amber-100 min-h-87.5 flex-2">some content</div>
        <div className="bg-amber-100 min-h-87.5 flex-1">some content</div>
        <div className="bg-amber-100 min-h-87.5 flex-1">some content</div>
        <div className="bg-amber-300" />
      </HOrVStack>
    </SectionVstack>
  )
}

export default FindYourScent
