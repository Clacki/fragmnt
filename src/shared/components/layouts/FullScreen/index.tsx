import type { DivProps } from "@/shared/types"
import clsx from "clsx"

const FullScreen = (props: DivProps) => {
  const { className, children, ...rest } = props
  return (
    <div
      {...rest}
      className={clsx(
        "flex h-screen w-screen flex-col overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  )
}

export default FullScreen
