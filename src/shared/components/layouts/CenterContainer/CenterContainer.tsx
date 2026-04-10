import type { DivProps } from "@/shared/types"
import clsx from "clsx"

/**
 * 부모의 한가운데에 children을 배치할 때 사용합니다.
 * FullScreen이 아닐 때 사용합니다.
 */
const CenterContainer = (props: DivProps) => {
  const { children, className, ...rest } = props

  return (
    <div
      {...rest}
      className={clsx(
        "flex h-full w-full flex-col items-center justify-center",
        className
      )}
    >
      {children}
    </div>
  )
}

export default CenterContainer
