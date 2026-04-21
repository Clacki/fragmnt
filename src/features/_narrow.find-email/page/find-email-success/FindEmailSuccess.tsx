import NarrowTitleSection from "@/features/_narrow/components/narrow-title-section/NarrowTitleSection"
import { Button, RoundBox, Vstack } from "@/shared/components"
import { useNavigate } from "@tanstack/react-router"

type FindEmailSuccessProps = {
  email: string
}
const FindEmailSuccess = ({ email }: FindEmailSuccessProps) => {
  const navigate = useNavigate()

  return (
    <Vstack gap="xl">
      <NarrowTitleSection title="이메일을 찾았습니다" />
      <RoundBox className="bg-green-input">
        <Vstack className="items-center">
          <p className="text-text-sub text-sm">Your email address</p>
          <p>{email}</p>
        </Vstack>
      </RoundBox>
      <Button onClick={() => navigate({ to: "/login" })}>
        로그인으로 이동
      </Button>
    </Vstack>
  )
}

export default FindEmailSuccess
