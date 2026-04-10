import type { DivProps } from "@/shared/types"
import clsx from "clsx"

/**
 * 뷰포트 한가운데에 children을 배치할 때 사용합니다
 * */
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
