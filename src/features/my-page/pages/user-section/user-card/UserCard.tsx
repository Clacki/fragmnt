import { Mail } from "lucide-react"
import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type UserCardProps = {
  label: string
  value: string
  className?: string
  icon?: ReactNode
}

/*
 * 사용자 정보를 표시하는 공통 카드 컴포넌트입니다.
 */
const UserCard = (props: UserCardProps) => {
  const { label, value, className, icon } = props

  return (
    <div
      className={cn(
        "flex w-full items-center gap-3 rounded-lg border border-border-primary bg-card p-lg",
        "shadow-md",
        className
      )}
    >
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-tag text-text-primary">
        {icon ?? <Mail className="size={18} strokeWidth={2}" />}
      </div>

      <div className="flex flex-col justify-center">
        <span className="text-sm leading-none text-text-sub">{label}</span>
        <span className="truncate pt-xs text-md leading-none text-text-primary">
          {value}
        </span>
      </div>
    </div>
  )
}

export default UserCard
