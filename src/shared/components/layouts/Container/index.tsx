import type { DivProps } from "@/shared/types"
import type { SmToXl } from "@/shared/types/commonPropsTypes/commonPropsTypes"
import { cva } from "class-variance-authority"
import clsx from "clsx"

const containerVariants = cva("mx-auto", {
  variants: {
    width: {
      sm: "size-container-sm",
      md: "size-container-md",
      lg: "size-container-lg",
      xl: "size-container-xl",
    },
    isPadded: {
      true: "p-2xl",
      false: "",
    },
  },
})

interface WithContainerProps {
  width?: SmToXl
  isPadded?: boolean
}
const Container = ({
  width = "lg",
  isPadded = false,
  ...props
}: DivProps & WithContainerProps) => {
  const { className, children, ...rest } = props

  return (
    <div
      {...rest}
      className={clsx(
        containerVariants({ width, isPadded }),
        className,
        "p-iua-xl"
      )}
    >
      {children}
    </div>
  )
}

export default Container
