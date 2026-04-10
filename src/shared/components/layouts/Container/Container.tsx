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

/**
 * 페이지 콘텐츠의 경계를 정할 때 사용합니다.
 * width에 따른 쓰임새
 * - "xl": 보통 페이지의 중앙부(default)
 * - "lg": 회원가입
 * - "md": 채팅 위젯
 * - "sm": 모달
 * */
const Container = ({
  width = "xl",
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
