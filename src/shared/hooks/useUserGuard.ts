import useAuthStore from "@/shared/api/use-auth-store"
import { IS_DEMO_MODE } from "@/shared/env/env-vars"
import { useNavigate } from "@tanstack/react-router"
import { useEffect } from "react"

export const useUserGuard = () => {
  const navigate = useNavigate()
  const accessToken = useAuthStore((state) => state.accessToken)

  useEffect(() => {
    if (IS_DEMO_MODE || accessToken) {
      return
    }

    navigate({
      to: "/login",
      search: {
        reason: "unauthorized",
      },
      replace: true,
    })
  }, [accessToken, navigate])
}
