import { Hstack, Vstack } from "@/shared/components"
import {
  Link,
  useLocation,
  useNavigate,
  type LinkProps,
} from "@tanstack/react-router"
import clsx from "clsx"
import { Home, ScrollText, Sparkles, User } from "lucide-react"

type NavigationPathname = LinkProps["to"]
type LucideIconProps = typeof Home

type NavigationButtonConfig = {
  pathname: NavigationPathname
  label: string
  Icon: LucideIconProps
}

const navigationButtonConfigs: NavigationButtonConfig[] = [
  { pathname: "/", label: "Home", Icon: Home },
  { pathname: "/scent-list", label: "List", Icon: ScrollText },
  { pathname: "/find-scent", label: "Search", Icon: Sparkles },
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
    <Link
      to={pathname}
      className="w-full hover:bg-gray-5 transition pt-sm border-t border-border"
    >
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
