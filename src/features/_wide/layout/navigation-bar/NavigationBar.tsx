import { Hstack, Vstack } from "@/shared/components"
import { useLocation, useNavigate } from "@tanstack/react-router"
import clsx from "clsx"
import { Home, ScrollText, Sparkles, User } from "lucide-react"

type NavigationPathname = "/" | "." // TODO: 실제 라우트 생성되고 나면 "." 삭제
// type NavigationPathname = "/" | "/list" | "/search" | "/my-page" | "." // TODO: 실제 라우트 생성되고 나면 이것 사용
type LucideIconProps = typeof Home

type NavigationButtonConfig = {
  pathname: NavigationPathname
  label: string
  Icon: LucideIconProps
}

const navigationButtonConfigs: NavigationButtonConfig[] = [
  { pathname: "/", label: "Home", Icon: Home },
  { pathname: ".", label: "List", Icon: ScrollText },
  { pathname: ".", label: "Search", Icon: Sparkles },
  { pathname: ".", label: "My Page", Icon: User },
]

const NavigationButton = ({
  pathname,
  label,
  Icon,
}: NavigationButtonConfig) => {
  const currentPathname = useLocation({
    select: (location) => location.pathname,
  })
  const isSelected = currentPathname === pathname
  const navigate = useNavigate()
  return (
    <button>
      <Vstack gap="none" className="items-center">
        <Icon
          size={40}
          className={clsx(
            "rounded-md transition",
            isSelected ? "text-card bg-primary scale-120" : "text-primary"
          )}
          onClick={() => navigate({ to: pathname })}
        />
        <p className="text-button">{label}</p>
      </Vstack>
    </button>
  )
}

const NavigationBar = () => {
  return (
    <Hstack className="justify-evenly">
      {navigationButtonConfigs.map((config) => (
        <NavigationButton {...config} />
      ))}
    </Hstack>
  )
}

export default NavigationBar
