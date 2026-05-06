import { useRouter } from "@tanstack/react-router"
import { ChevronLeft } from "lucide-react"

type BackButtonProps = {
  onClick?: () => void
  fallbackPath?: string
  mode?: "history" | "fallback"
}

const BackButton = ({
  onClick,
  fallbackPath = "/",
  mode = "history",
}: BackButtonProps) => {
  const router = useRouter()

  const handleClick = () => {
    if (onClick) {
      onClick()
      return
    }

    if (mode === "history" && window.history.length > 1) {
      window.history.back()
      return
    }

    router.navigate({ to: fallbackPath })
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="뒤로가기"
      className="flex cursor-pointer mt-1 md:mt-0 h-6 w-6 md:h-9 md:w-9 items-center justify-center rounded-full border border-border bg-card transition-all duration-200 hover:bg-button hover:text-surface-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-button focus-visible:ring-offset-2"
    >
      <ChevronLeft className="h-7 w-7" />
    </button>
  )
}

export default BackButton
