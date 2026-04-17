import type { FileRoutesByFullPath } from "@/routeTree.gen"
import { Hstack, Vstack } from "@/shared/components"
import { Link, useLocation, useNavigate } from "@tanstack/react-router"
import clsx from "clsx"
import { Home, ScrollText, Sparkles, User } from "lucide-react"

type NavigationPathname = keyof FileRoutesByFullPath
type LucideIconProps = typeof Home

type NavigationButtonConfig = {
  pathname: NavigationPathname
  label: string
  Icon: LucideIconProps
}

const navigationButtonConfigs: NavigationButtonConfig[] = [
  { pathname: "/", label: "Home", Icon: Home },
  { pathname: "/not-real", label: "List", Icon: ScrollText }, // TODO: 리스트 페이지 등록시 수정
  { pathname: "/not-real", label: "Search", Icon: Sparkles }, // TODO: 검색 페이지 등록시 수정
  { pathname: "/my-page", label: "My Page", Icon: User },
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
    <Link to={pathname} className="w-full hover:bg-gray-5 transition pt-sm">
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
    </Link>
  )
}

const NavigationBar = () => {
  return (
    <Hstack className="justify-evenly bg-card" gap="none">
      {navigationButtonConfigs.map((config) => (
        <NavigationButton key={config.label} {...config} />
      ))}
    </Hstack>
  )
}

export default NavigationBar
