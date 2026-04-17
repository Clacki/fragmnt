import { ChevronLeft } from "lucide-react"

type BackButtonProps = {
  onClick?: () => void
}

const BackButton = ({ onClick }: BackButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="뒤로가기"
      className="flex cursor-pointer h-9 w-9 items-center justify-center rounded-full border border-border bg-card transition-all duration-200 hover:bg-button hover:text-surface-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-button focus-visible:ring-offset-2"
    >
      <ChevronLeft className="h-7 w-7" />
    </button>
  )
}

export default BackButton
