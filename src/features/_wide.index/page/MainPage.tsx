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
    <div className="relative">
      <div className="absolute left-1/2 top-md z-10 w-[calc(100%-32px)] max-w-[520px] -translate-x-1/2 rounded-full border border-white/20 bg-white/20 px-sm py-xs text-center text-caption text-white/65 backdrop-blur-[2px]">
        <strong className="font-medium text-white/75">Portfolio Demo</strong>
        <span className="mx-xs text-white/45">·</span>
        <span className="hidden sm:inline">
          일부 기능은 목데이터 기반으로 동작합니다.
        </span>
        <span className="sm:hidden">목데이터 기반</span>
      </div>

      <Vstack gap="2xl" className="pb-2xl">
        <Introduction />
        <FindYourScent />
        <ViewAllScents />
        <img src={InsertionSrc} alt="삽입 이미지" />
        <QuickStart />
        <CustomerReviews />
        <FAQ />
      </Vstack>
    </div>
  )
}

export default MainPage
