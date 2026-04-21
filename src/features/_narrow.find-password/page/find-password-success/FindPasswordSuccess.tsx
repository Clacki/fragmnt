import NarrowTitleSection from "@/features/_narrow/components/narrow-title-section/NarrowTitleSection"
import { Button, RoundBox, Vstack } from "@/shared/components"
import { useNavigate } from "@tanstack/react-router"

const FindPasswordSuccess = () => {
  const navigate = useNavigate()

  return (
    <Vstack gap="xl">
      <NarrowTitleSection title="비밀번호를 변경했습니다" />
      <RoundBox
        padding="2xl"
        className="bg-green-input flex justify-center items-center"
      >
        이제 새로운 비밀번호로 로그인할 수 있습니다
      </RoundBox>
      <Button onClick={() => navigate({ to: "/login" })}>
        로그인으로 이동
      </Button>
    </Vstack>
  )
}

export default FindPasswordSuccess
