import useAuthStore from "@/shared/api/use-auth-store"
import { useNavigate } from "@tanstack/react-router"
import { useEffect } from "react"

export const useUserGuard = () => {
  const navigate = useNavigate()
  const accessToken = useAuthStore((state) => state.accessToken)

  useEffect(() => {
    if (accessToken) {
      return
    }

    // TODO: 라우트 구조 정리 후 TanStack Router beforeLoad 또는 _auth 라우트 그룹 방식으로 전환 검토
    navigate({
      to: "/login",
      search: {
        reason: "unauthorized",
      },
      replace: true,
    })
  }, [accessToken, navigate])
}
