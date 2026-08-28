import EmptyStateImage from "@/assets/images/empty-state/empty-scent.svg"
import {
  Button,
  CenterContainer,
  Container,
  EmptyState,
} from "@/shared/components"
import LoadingState from "@/shared/components/loading-state/LoadingState"

import { instance } from "@/shared/api/axios-instance"
import queryClient from "@/shared/api/query-client"
import useAuthStore from "@/shared/api/use-auth-store"
import { IS_DEMO_MODE } from "@/shared/env/env-vars"
import { useNavigate } from "@tanstack/react-router"
import axios from "axios"
import { LogOutIcon, RotateCcwIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { useUserProfile } from "./hooks/useUserProfile"
import { TabSection } from "./pages/tab-section/TabSection"
import { UserSection } from "./pages/user-section/UserSection"

export const MyPage = () => {
  const { data: user, isLoading, error } = useUserProfile()
  const navigate = useNavigate()
  const logout = useAuthStore((state) => state.logout)
  const [isResettingDemo, setIsResettingDemo] = useState(false)
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  useEffect(() => {
    if (
      !IS_DEMO_MODE &&
      axios.isAxiosError(error) &&
      error.response?.status === 401
    ) {
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

  const handleLogout = async () => {
    setIsLoggingOut(true)

    try {
      await logout()
    } finally {
      queryClient.clear()
      await navigate({ to: "/", replace: true })
      setIsLoggingOut(false)
    }
  }

  const handleResetDemo = async () => {
    setIsResettingDemo(true)

    try {
      await instance.post("/demo/reset")
      queryClient.clear()
      window.location.reload()
    } finally {
      setIsResettingDemo(false)
    }
  }

  return (
    <CenterContainer className="min-h-screen w-full">
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
              title="프로필을 불러오지 못했습니다."
              description="잠시 후 다시 시도해 주세요."
            />
          </div>
        ) : null}

        {!isLoading && !error && user ? (
          <>
            <UserSection key={user.id} user={user} />
            <TabSection />
            <div className="mt-2xl flex self-end">
              {IS_DEMO_MODE ? (
                <Button
                  style="ghost"
                  size="sm"
                  onClick={handleResetDemo}
                  disabled={isResettingDemo || isLoggingOut}
                  className="text-sm text-text-sub"
                >
                  <RotateCcwIcon size={16} />
                  {isResettingDemo ? "데모 초기화 중..." : "데모 데이터 초기화"}
                </Button>
              ) : null}
              <Button
                style="ghost"
                size="sm"
                onClick={handleLogout}
                disabled={isLoggingOut || isResettingDemo}
                className="text-sm text-text-sub"
              >
                <LogOutIcon size={16} />
                {isLoggingOut ? "로그아웃 중..." : "로그아웃"}
              </Button>
            </div>
          </>
        ) : null}
      </Container>
    </CenterContainer>
  )
}
