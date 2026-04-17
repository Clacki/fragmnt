import { Hstack, RoundBox } from "@/shared/components"
import { ChevronLeft, ChevronRight } from "lucide-react"
import SectionVstack from "../section-container/SectionContainer"

const ReviewCard = () => {
  return (
    <RoundBox padding="none" className="w-60 h-90 shrink-0 bg-amber-100">
      review card placeholder
    </RoundBox>
  )
}

// TODO: RoundButton 공통 컴포넌트 만들어야(기존 button 확장하든, 새로 만들든)
const CustomerReviews = () => {
  return (
    <SectionVstack>
      <h2>고객 후기</h2>
      <Hstack className="justify-end">
        <button>
          <ChevronLeft />
        </button>
        <button>
          <ChevronRight />
        </button>
      </Hstack>
      <Hstack className="overflow-hidden">
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <ReviewCard key={index} />
          ))}
      </Hstack>
    </SectionVstack>
  )
}

export default CustomerReviews
