import InsertionSrc from "@/assets/images/main/insertion.png"
import { Vstack } from "@/shared/components"
import Introduction from "./1-introduction/Introduction"
import FindYourScent from "./2-find-your-scent/FindYourScent"
import ViewAllScents from "./3-view-all-scents/ViewAllScents"
import QuickStart from "./4-quick-start/QuickStart"
import CustomerReviews from "./5-customer-reviews/CustomerReviews"
import FAQ from "./6-faq/FAQ"

const MainPage = () => {
  return (
    <Vstack gap="2xl" className="pb-2xl">
      <Introduction />
      <FindYourScent />
      <ViewAllScents />
      <img src={InsertionSrc} alt="삽입 이미지" />
      <QuickStart />
      <CustomerReviews />
      <FAQ />
    </Vstack>
  )
}

export default MainPage
