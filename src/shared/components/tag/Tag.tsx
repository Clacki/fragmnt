import { cva } from "class-variance-authority"
import clsx from "clsx"

type TagVariant = "outlined" | "selected" | "soft" | "subtle"
type TagSize = "sm" | "md"

type TagProps = {
  label: string
  size?: TagSize
  variant?: TagVariant
  onClick?: () => void
}

const tagVariants = cva(
  "inline-flex items-center justify-center rounded-full transition-all duration-200",
  {
    variants: {
      size: {
        sm: "px-sm py-xs text-sm",
        md: "px-md py-sm text-md",
      },
      variant: {
        outlined: "border border-border bg-gray-0 text-text-sub",
        selected: "border border-border bg-button text-text-button",
        soft: "bg-surface-container text-text-highlight",
        subtle: "border border-border bg-surface-default text-text-sub",
      },
      clickable: {
        true: "cursor-pointer active:scale-95",
        false: "cursor-default",
      },
    },
    defaultVariants: {
      size: "sm",
      variant: "outlined",
      clickable: false,
    },
  }
)

const Tag = ({ label, size, variant, onClick }: TagProps) => {
  const isClickable = Boolean(onClick)

  if (isClickable) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={clsx(
          tagVariants({
            size,
            variant,
            clickable: true,
          })
        )}
      >
        {label}
      </button>
    )
  }

  return (
    <span
      className={clsx(
        tagVariants({
          size,
          variant,
          clickable: false,
        })
      )}
    >
      {label}
    </span>
  )
}

export default Tag
