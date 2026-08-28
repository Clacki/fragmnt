import EmptyScentImage from "@/assets/images/empty-state/empty-scent.svg"
import { Button, EmptyState } from "@/shared/components"
import { useNavigate } from "@tanstack/react-router"

const SharedError = () => {
  const navigate = useNavigate()

  return (
    <main className="flex min-h-dvh items-center justify-center px-lg py-2xl">
      <EmptyState
        imageSrc={EmptyScentImage}
        title="공유된 향기 결과를 찾을 수 없어요"
        description="링크가 만료되었거나 주소가 올바르지 않습니다."
        action={
          <Button onClick={() => navigate({ to: "/" })}>홈으로 가기</Button>
        }
      />
    </main>
  )
}

export default SharedError
