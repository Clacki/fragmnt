import { CenterContainer, Container, FullScreen } from "@/shared/components"

import { useEffect, useState } from "react"

import type { UserProfile } from "../types"
import UserSection from "./user-section/UserSection"
// index 필요
import LoadingState from "@/shared/components/loading-state/LoadingState"

export default function MyPage() {
  const [user, setUser] = useState<UserProfile | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/v1/accounts/me")
        const data = await res.json()
        setUser(data)
      } catch {
        console.error("유저 정보 가져오기 실패")
      }
    }

    fetchUser()
  }, [])

  return (
    <FullScreen className="bg-surface-">
      <CenterContainer className="w-full py-2xl">
        <Container
          width="xl"
          isPadded
          className="h-screen max-w-container-xl border border-border bg-surface-default shadow-box"
        >
          {!user ? <LoadingState /> : <UserSection user={user} />}
        </Container>
      </CenterContainer>
    </FullScreen>
  )
}
