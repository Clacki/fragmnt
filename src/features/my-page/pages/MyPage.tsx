import { CenterContainer, Container } from "@/shared/components"
import LoadingState from "@/shared/components/loading-state/LoadingState"
import { useUserProfile } from "../hooks/useUserProfile"
import TabSection from "./tab-section/TabSection"
import UserSection from "./user-section/UserSection"

export default function MyPage() {
  const { data: user, isLoading, error } = useUserProfile()

  return (
    <CenterContainer className="min-h-screen w-full py-2xl">
      <Container
        width="xl"
        isPadded
        className="min-h-screen max-w-container-xl bg-surface-default"
      >
        {isLoading ? <LoadingState /> : null}
        {!isLoading && error ? <div>유저 정보를 불러오지 못했어요.</div> : null}
        {!isLoading && !error && user ? <UserSection user={user} /> : null}

        <TabSection />
      </Container>
    </CenterContainer>
  )
}
