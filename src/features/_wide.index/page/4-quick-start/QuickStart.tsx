import { Button, Hstack, RoundBox } from "@/shared/components"
import { ChevronRight } from "lucide-react"
import SectionVstack from "../section-container/SectionContainer"

const QuickStart = () => {
  return (
    <SectionVstack className="items-center">
      <h2>간편한 시작</h2>
      <h3>fragmnt 이렇게 사용해보세요</h3>
      <p>세 번의 과정으로 당신의 공간에 딱 맞는 향기를 찾아보세요.</p>

      <Hstack gap="xl" className="w-full">
        <RoundBox radius="lg" className="bg-amber-200 w-full">
          card content placeholder
        </RoundBox>
        <RoundBox radius="lg" className="bg-amber-200 w-full">
          card content placeholder
        </RoundBox>
        <RoundBox radius="lg" className="bg-amber-200 w-full">
          card content placeholder
        </RoundBox>
      </Hstack>

      <Hstack gap="none">
        <Button style="outlined">Start now</Button>
        <Button>
          <p>Learn more</p>
          <ChevronRight />
        </Button>
      </Hstack>
    </SectionVstack>
  )
}

export default QuickStart
