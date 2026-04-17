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
  "inline-flex items-center justify-center rounded-full transition-all duration-200 active:scale-95",
  {
    variants: {
      size: {
        sm: "text-sm py-xs px-sm",
        md: "text-md py-sm px-md",
      },
      variant: {
        outlined: "cursor-pointer border border-border text-text-sub bg-gray-0",
        selected:
          "cursor-pointer border border-border bg-button text-text-button",
        soft: "cursor-default bg-surface-container text-text-highlight",
        subtle:
          "cursor-default border border-border bg-surface-default text-text-sub",
      },
    },
    defaultVariants: {
      size: "sm",
      variant: "outlined",
    },
  }
)

const Tag = ({ label, size, variant, onClick }: TagProps) => {
  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className={clsx(
          tagVariants({
            size,
            variant,
          })
        )}
      >
        {label}
      </button>
    </>
  )
}

export default Tag
