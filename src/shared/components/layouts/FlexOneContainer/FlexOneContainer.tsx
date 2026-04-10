import type { DivProps } from "@/shared/types"
import { cva } from "class-variance-authority"
import clsx from "clsx"

/**
 * flex-1로 남는 공간을 채울 때 사용합니다
 * 스크롤 영역을 설정할 때 유용합니다
 * */
const flexOneContainerVariants = cva("flex-1 [scrollbar-gutter:stable]", {
  variants: {
    isYScrollable: {
      true: "overflow-y-auto",
      false: "overflow-y-hidden",
    },
    isXScrollable: {
      true: "overflow-x-auto",
      false: "overflow-x-hidden",
    },
  },
})

interface WithFlexOneContainer {
  isYScrollable?: boolean
  isXScrollable?: boolean
}
const FlexOneContainer = ({
  isYScrollable = false,
  isXScrollable = false,
  ...props
}: DivProps & WithFlexOneContainer) => {
  const { className, children, ...rest } = props

  return (
    <div
      {...rest}
      className={clsx(
        flexOneContainerVariants({ isYScrollable, isXScrollable }),
        className
      )}
    >
      {children}
    </div>
  )
}

export default FlexOneContainer
