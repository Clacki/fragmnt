import type { DefaultButtonProps } from "@/shared/types"
import { cva } from "class-variance-authority"
import clsx from "clsx"
import type { ReactNode } from "react"

const buttonVariants = cva("transition", {
  variants: {
    size: {
      sm: "text-md py-sm px-xl",
      lg: "text-md py-lg px-xl",
    },
    shape: {
      rectangle: "rounded-md",
      pill: "rounded-full",
    },
    isContained: {
      false: clsx(
        "border border-primary hover:border-primary-hover disabled:border-primary-disabled",
        "bg-card hover:bg-gray-5",
        "text-primary disabled:text-text-disabled"
      ),
      true: clsx(
        "bg-primary hover:bg-primary-hover disabled:bg-primary-disabled",
        "text-text-button disabled:text-text-disabled"
      ),
    },
    disabled: {
      false: "cursor-pointer",
      true: "",
    },
  },
})

type ButtonProps = {
  size?: "sm" | "lg"
  shape?: "rectangle" | "pill"
  isContained?: boolean
  disabled?: boolean
  children?: ReactNode
}
const Button = ({
  size = "sm",
  shape = "rectangle",
  isContained = true,
  disabled = false,
  children,
  ...props
}: DefaultButtonProps & ButtonProps) => {
  const { className, ...rest } = props
  return (
    <>
      <button
        {...rest}
        disabled={disabled}
        className={clsx(
          buttonVariants({ size, shape, isContained, disabled }),
          className
        )}
      >
        {children}
      </button>
    </>
  )
}

export default Button
