import useAuthStore from "@/shared/api/use-auth-store"
import { Hstack, Vstack } from "@/shared/components"
import { Link, useLocation, type LinkProps } from "@tanstack/react-router"
import clsx from "clsx"
import {
  Home,
  LogIn,
  ScrollText,
  Sparkles,
  User,
  type LucideIcon,
} from "lucide-react"

type NavigationPathname = LinkProps["to"]

type NavigationButtonConfig = {
  pathname: NavigationPathname
  label: string
  Icon: LucideIcon
}

const makeNavigationButtonConfigs = (
  accessToken: string | null
): NavigationButtonConfig[] => {
  const defaultConfigs: NavigationButtonConfig[] = [
    { pathname: "/", label: "Home", Icon: Home },
    { pathname: "/scent-list", label: "List", Icon: ScrollText },
    { pathname: "/find-scent", label: "Search", Icon: Sparkles },
  ]

  const conditionalConfig: NavigationButtonConfig = accessToken
    ? { pathname: "/my-page", label: "My Page", Icon: User }
    : { pathname: "/login", label: "Login", Icon: LogIn }

  return [...defaultConfigs, conditionalConfig]
}

const NavigationButton = ({
  pathname,
  label,
  Icon,
}: NavigationButtonConfig) => {
  const currentPathname = useLocation({
    select: (location) => location.pathname,
  })

  const isSelected = currentPathname === pathname

  return (
    <Link
      to={pathname}
      className="flex h-14 w-full items-center justify-center border-t border-border transition hover:bg-gray-5 md:h-18 md:pt-sm"
    >
      <Vstack gap="none" className="items-center justify-center">
        <Icon
          className={clsx(
            "size-7 rounded-md p-1 transition-all duration-300 md:size-10",
            isSelected
              ? "scale-140 md:scale-110 bg-primary text-card shadow-[0_0_16px_rgba(86,101,74,0.35)]"
              : "text-primary opacity-70"
          )}
        />

        <p className="hidden text-button md:block">{label}</p>
      </Vstack>
    </Link>
  )
}

const NavigationBar = () => {
  const accessToken = useAuthStore((state) => state.accessToken)
  const buttonConfigs = makeNavigationButtonConfigs(accessToken)

  return (
    <Hstack className="justify-evenly bg-card" gap="none">
      {buttonConfigs.map((config) => (
        <NavigationButton key={config.label} {...config} />
      ))}
    </Hstack>
  )
}

export default NavigationBar
