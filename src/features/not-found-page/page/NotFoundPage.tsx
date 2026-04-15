import NotFoundPageImage from "@/assets/images/not-found-page/not-found-page.svg"
import { Button } from "@/shared/components"
import { useNavigate } from "@tanstack/react-router"

export default function NotFoundPage() {
  const navigate = useNavigate()

  const handleGoHome = () => {
    navigate({ to: "/" })
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-surface-default px-xl py-2xl">
      <section className="flex w-full max-w-[480px] flex-col items-center text-center">
        <img
          src={NotFoundPageImage}
          alt="페이지를 찾을 수 없음"
          className="mb-xl h-40 w-40 object-contain"
        />

        <div className="mb-xl flex flex-col items-center gap-sm">
          <h1 className="text-xl font-bold text-text-primary">
            페이지를 찾을 수 없어요
          </h1>
          <p className="text-sm leading-6 text-text-description">
            요청하신 페이지가 없거나 이동되었어요.
          </p>
        </div>

        <Button onClick={handleGoHome}>홈으로 가기</Button>
      </section>
    </main>
  )
}
