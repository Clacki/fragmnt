import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

type FindMethodOptionProps = {
  icon: LucideIcon
  title: string
  description: ReactNode
  onClick?: () => void
}

const optionButtonStyle =
  "w-full rounded-2xl border border-border bg-white p-md text-left text-text-sub transition-all duration-200 ease-out hover:-translate-y-[1px] hover:border-primary-hover hover:bg-green-input hover:shadow-sm active:translate-y-0 active:scale-[0.99]"

const iconWrapperStyle =
  "flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green-input"

const FindMethodOption = ({
  icon: Icon,
  title,
  description,
  onClick,
}: FindMethodOptionProps) => {
  return (
    <button type="button" className={optionButtonStyle} onClick={onClick}>
      <div className="flex items-center gap-md">
        <div className={iconWrapperStyle}>
          <Icon className="h-7 w-7 text-primary" strokeWidth={2} />
        </div>

        <div className="text-left">
          <strong className="block text-md font-bold text-text-primary">
            {title}
          </strong>
          <span className="mt-1 block text-sm leading-relaxed text-text-secondary">
            {description}
          </span>
        </div>
      </div>
    </button>
  )
}

export default FindMethodOption
