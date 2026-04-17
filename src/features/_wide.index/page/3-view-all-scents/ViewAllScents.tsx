import { Button, Hstack } from "@/shared/components"
import { Compass } from "lucide-react"
import SectionVstack from "../section-container/SectionContainer"

const ViewAllScents = () => {
  return (
    <SectionVstack className="items-center">
      <Compass />
      <p>Curated</p>
      <h2>지금 가장 사랑받는 향기들</h2>
      <p>누군가의 공간을 완성했던 향기 조각들을 만나보세요.</p>
      <p>기분과 장소, 그리고 찰나의 순간을 위해 엄선했습니다.</p>
      <Hstack gap="none">
        <Button style="outlined">View all</Button>
        <Button>Scroll</Button>
      </Hstack>
    </SectionVstack>
  )
}

export default ViewAllScents
