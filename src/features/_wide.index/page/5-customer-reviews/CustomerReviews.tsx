import SectionVstack from "../section-container/SectionContainer"
import ReviewCarousel from "./review-carousel/ReviewCarousel"

// TODO: RoundButton 공통 컴포넌트 만들어야(기존 button 확장하든, 새로 만들든)
const CustomerReviews = () => {
  return (
    <SectionVstack>
      <h2>고객 후기</h2>
      <ReviewCarousel />
    </SectionVstack>
  )
}

export default CustomerReviews
