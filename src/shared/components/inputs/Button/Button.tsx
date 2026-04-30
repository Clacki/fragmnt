import cn from "@/lib/utils"
import type { DefaultButtonProps } from "@/shared/types"
import { cva } from "class-variance-authority"
import clsx from "clsx"
import { Hstack } from "../../layouts"

const buttonVariants = cva("transition", {
  variants: {
    padding: {
      wide: "",
      same: "",
    },
    radius: {
      md: "rounded-md",
      full: "rounded-full",
    },
    size: {
      sm: "text-md", // NOTE: 글자 크기도 다르게 한다면 수정
      lg: "text-md", // NOTE: 글자 크기도 다르게 한다면 수정
    },
    style: {
      contained: clsx(
        "bg-primary hover:bg-primary-hover disabled:bg-primary-disabled",
        "text-text-button disabled:text-text-disabled"
      ),
      outlined: clsx(
        "outline outline-primary hover:outline-primary-hover disabled:outline-primary-disabled -outline-offset-1", // NOTE: border를 사용하면 버튼 크기도 커짐
        "bg-card hover:bg-gray-5",
        "text-primary disabled:text-text-disabled"
      ),
      ghost: clsx(
        "hover:bg-green-input disabled:bg-transparent",
        "text-primary disabled:text-text-disabled"
      ),
    },
    disabled: {
      false: "cursor-pointer",
      true: "",
    },
  },
  compoundVariants: [
    { padding: "wide", size: "sm", className: "py-sm px-xl" },
    { padding: "wide", size: "lg", className: "py-lg px-xl" },
    { padding: "same", size: "sm", className: "p-sm" },
    { padding: "same", size: "lg", className: "p-lg" },
  ],
})

export type ButtonStyle = "contained" | "outlined" | "ghost"
export type WithButtonProps = {
  size?: "sm" | "lg"
  padding?: "wide" | "same"
  radius?: "md" | "full"
  style?: ButtonStyle
}

const Button = ({
  size = "sm",
  padding = "wide",
  radius = "md",
  style = "contained",
  disabled = false,
  children,
  ...props
}: DefaultButtonProps & WithButtonProps) => {
  const { className, ...rest } = props
  return (
    <button
      {...rest}
      disabled={disabled}
      className={cn(
        buttonVariants({ size, padding, radius, style, disabled }),
        className
      )}
    >
      <Hstack gap="sm" className="items-center">
        {children}
      </Hstack>
    </button>
  )
}

export default Button
