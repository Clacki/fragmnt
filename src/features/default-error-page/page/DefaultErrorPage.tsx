import NotFoundPageImage from "@/assets/images/not-found-page/not-found-page.svg"
import { Button } from "@/shared/components"
import { useLocation, useNavigate } from "@tanstack/react-router"

const DefaultErrorPage = () => {
  const navigate = useNavigate()
  const pathname = useLocation().pathname

  const handleGoHome = () => {
    navigate({ to: "/" })
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-surface-default px-xl py-2xl">
      <section className="flex w-full max-w-[480px] flex-col items-center text-center">
        <img
          src={NotFoundPageImage}
          alt="알 수 없는 오류 발생"
          className="mb-xl h-40 w-40 object-contain"
        />

        <div className="mb-xl flex flex-col items-center gap-sm">
          <h1 className="text-xl font-bold text-text-primary">
            알 수 없는 오류가 발생했습니다
          </h1>
          <p className="text-sm leading-6 text-text-description">
            잠시 후 다시 시도해주세요
          </p>
        </div>

        {pathname !== "/" && (
          <Button onClick={handleGoHome}>홈으로 가기</Button>
        )}
      </section>
    </main>
  )
}

export default DefaultErrorPage
