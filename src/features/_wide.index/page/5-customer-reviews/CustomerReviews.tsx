import SectionVstack from "../section-container/SectionContainer"
import ReviewCarousel from "./review-carousel/ReviewCarousel"

const CustomerReviews = () => {
  return (
    <SectionVstack>
      <h2>고객 후기</h2>
      <ReviewCarousel />
    </SectionVstack>
  )
}

export default CustomerReviews
