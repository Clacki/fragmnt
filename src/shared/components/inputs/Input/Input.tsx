import type { InputProps } from "@/shared/types"
import type { None } from "@/shared/types/commonPropsTypes/commonPropsTypes"
import { cva } from "class-variance-authority"
import clsx from "clsx"
import type { ReactNode } from "react"
import { Hstack } from "../../layouts"

const inputVariants = cva(
  "rounded-md transition items-center outline -outline-offset-1 bg-card text-text-primary disabled:text-text-disabled focus-within:shadow-box pr-lg",
  {
    variants: {
      status: {
        none: "outline-border focus-within:outline-text-primary focus-within:outline-2",
        success: "outline-border-primary focus-within:outline-2",
        error: "outline-border-error focus-within:outline-2",
      },
    },
  }
)

type WithInputProps = {
  status?: None | "success" | "error"
  trailingChild?: ReactNode
}
const Input = ({
  status = "none",
  trailingChild,
  ...props
}: InputProps & WithInputProps) => {
  const { className, disabled, ...rest } = props

  return (
    <Hstack gap="md" className={clsx(inputVariants({ status }), className)}>
      <input
        {...rest}
        disabled={disabled}
        className="flex-1 border-0 py-md pl-lg outline-0"
      />
      {trailingChild}
    </Hstack>
  )
}

export default Input
