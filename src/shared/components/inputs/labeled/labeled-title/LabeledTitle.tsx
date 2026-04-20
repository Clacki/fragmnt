import type { PProps } from "@/shared/types"
import clsx from "clsx"
import { useLabeledContext } from "../labeled-context/labeled-context"

const LabeledTitle = (props: PProps) => {
  const { className, children, ...rest } = props
  const { isError } = useLabeledContext()

  return (
    <p
      {...rest}
      className={clsx("font-medium", isError && "text-text-error", className)}
    >
      {children}
    </p>
  )
}

export default LabeledTitle
