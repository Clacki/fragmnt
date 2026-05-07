import InsertionSrc from "@/assets/images/main/insertion.png"
import useAuthStore from "@/shared/api/use-auth-store"
import { Vstack } from "@/shared/components"
import { useNavigate, useSearch } from "@tanstack/react-router"
import { useEffect } from "react"
import Introduction from "./1-introduction/Introduction"
import FindYourScent from "./2-find-your-scent/FindYourScent"
import ViewAllScents from "./3-view-all-scents/ViewAllScents"
import QuickStart from "./4-quick-start/QuickStart"
import CustomerReviews from "./5-customer-reviews/CustomerReviews"
import FAQ from "./6-faq/FAQ"

const MainPage = () => {
  const { access_token: socialLoginAccessToken } = useSearch({
    from: "__root__",
  })
  const navigate = useNavigate()

  const accessToken = useAuthStore((state) => state.accessToken)
  const refresh = useAuthStore((state) => state.refresh)

  if (socialLoginAccessToken && !accessToken) {
    refresh()
  }

  useEffect(() => {
    if (!socialLoginAccessToken) return
    if (!accessToken) return
    navigate({ to: "/" })
  }, [socialLoginAccessToken, accessToken]) // eslint-disable-line react-hooks/exhaustive-deps

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
