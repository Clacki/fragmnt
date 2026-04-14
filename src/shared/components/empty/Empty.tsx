import { cn } from "@/lib/utils"
import type { SmToLg } from "@/shared/types"
import { Image as ImageIcon, UserRound } from "lucide-react"

type EmptyType = "avatar" | "image"

export type EmptyProps = {
  type?: EmptyType
  size?: SmToLg
  iconSize?: number
  wrapperClassName?: string
  className?: string
}

const sizeStyle = {
  avatar: {
    sm: "h-20 w-20",
    md: "h-[124px] w-[124px]",
    lg: "h-40 w-40",
  },
  image: {
    sm: "h-[100px] w-[100px]",
    md: "h-[138px] w-[138px]",
    lg: "h-[180px] w-[180px]",
  },
} as const

const iconSizeStyle = {
  sm: 24,
  md: 36,
  lg: 48,
} as const

const Empty = ({
  type = "image",
  size = "md",
  iconSize,
  wrapperClassName,
  className,
}: EmptyProps) => {
  const isAvatar = type === "avatar"

  return (
    <div className={cn("flex items-center justify-center", wrapperClassName)}>
      <div
        className={cn(
          "flex shrink-0 items-center justify-center border border-border",
          sizeStyle[type][size],
          isAvatar
            ? "rounded-full bg-white shadow-md"
            : "rounded-lg bg-primary-disabled",
          className
        )}
      >
        {isAvatar ? (
          <UserRound
            size={iconSize ?? iconSizeStyle[size]}
            className="text-text-primary"
            strokeWidth={2.2}
          />
        ) : (
          <ImageIcon
            size={iconSize ?? iconSizeStyle[size]}
            className="text-text-primary"
            strokeWidth={1.8}
          />
        )}
      </div>
    </div>
  )
}

export default Empty
