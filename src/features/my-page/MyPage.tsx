import EmptyStateImage from "@/assets/images/empty-state/empty-scent.svg"
import {
  Button,
  CenterContainer,
  Container,
  EmptyState,
} from "@/shared/components"
import LoadingState from "@/shared/components/loading-state/LoadingState"

import useAuthStore from "@/shared/api/use-auth-store"
import { useNavigate } from "@tanstack/react-router"
import axios from "axios"
import { LogOutIcon } from "lucide-react"
import { useEffect } from "react"
import { useUserProfile } from "./hooks/useUserProfile"
import { TabSection } from "./pages/tab-section/TabSection"
import { UserSection } from "./pages/user-section/UserSection"

export const MyPage = () => {
  const { data: user, isLoading, error } = useUserProfile()
  const navigate = useNavigate()
  const logout = useAuthStore((state) => state.logout)

  useEffect(() => {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      logout()

      navigate({
        to: "/login",
        search: {
          reason: "unauthorized",
        },
        replace: true,
      })
    }
  }, [error, logout, navigate])

  const handleLogout = () => {
    logout()
    navigate({ to: "/" })
  }

  return (
    <CenterContainer className="min-h-screen w-full py-2xl">
      <Container
        width="xl"
        isPadded
        className="flex min-h-screen max-w-container-xl flex-col bg-surface-default"
      >
        {isLoading ? <LoadingState /> : null}

        {!isLoading && error ? (
          <div>
            <EmptyState
              imageSrc={EmptyStateImage}
              title="리뷰를 불러오지 못했습니다."
              description="잠시 후 다시 시도해주세요!"
            />
          </div>
        ) : null}

        {!isLoading && !error && user ? (
          <>
            <UserSection user={user} />
            <TabSection />

            <Button
              style="ghost"
              size="sm"
              onClick={handleLogout}
              className="mt-2xl self-end text-text-sub text-sm"
            >
              <LogOutIcon size={16} />
              로그아웃
            </Button>
          </>
        ) : null}
      </Container>
    </CenterContainer>
  )
}
