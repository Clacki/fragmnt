import { Button, Hstack } from "@/shared/components"
import { Compass } from "lucide-react"
import SectionVstack from "../section-container/SectionContainer"
import TitleSection from "../title-section/TitleSection"

const ViewAllScents = () => {
  return (
    <SectionVstack className="items-center">
      <Compass size={60} className="text-text-sub" />
      <TitleSection
        smallTitle="Curated"
        bigTitle="지금 가장 사랑받는 향기들"
        subtitle={
          <>
            <p>
              누군가의 공간을 완성했던 향기 조각들을 만나보세요.
              <br />
              기분과 장소, 그리고 찰나의 순간을 위해 엄선했습니다.
            </p>
          </>
        }
      />
      <Hstack gap="none">
        <Button style="outlined">View all</Button>
        <Button style="ghost">Scroll</Button>
      </Hstack>
    </SectionVstack>
  )
}

export default ViewAllScents
