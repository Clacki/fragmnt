import type { DivProps } from "@/shared/types"
import type {
  None,
  SmToLg,
  XsToXl,
} from "@/shared/types/commonPropsTypes/commonPropsTypes"
import { gapVariants } from "@/shared/utils/variant-to-classname"
import { cva } from "class-variance-authority"
import clsx from "clsx"

const gridContainerVariants = cva("grid", {
  variants: {
    gap: gapVariants,
    isAutoFill: {
      true: "",
      false: "",
    },
    minColWidth: {
      xs: "",
      sm: "",
      md: "",
      lg: "",
      xl: "",
    },
  },
  compoundVariants: [
    {
      isAutoFill: true,
      minColWidth: "sm",
      className: "grid-cols-[repeat(auto-fill,minmax(100px,1fr))]",
    },
    {
      isAutoFill: true,
      minColWidth: "md",
      className: "grid-cols-[repeat(auto-fill,minmax(200px,1fr))]",
    },
    {
      isAutoFill: true,
      minColWidth: "lg",
      className: "grid-cols-[repeat(auto-fill,minmax(250,1fr))]",
    },
    {
      isAutoFill: false,
      minColWidth: "sm",
      className: "grid-cols-[repeat(auto-fit,minmax(100,1fr))]",
    },
    {
      isAutoFill: false,
      minColWidth: "md",
      className: "grid-cols-[repeat(auto-fit,minmax(200,1fr))]",
    },
    {
      isAutoFill: false,
      minColWidth: "lg",
      className: "grid-cols-[repeat(auto-fit,minmax(250,1fr))]",
    },
  ],
})

interface WithGridContainerProps {
  gap: XsToXl | None
  isAutoFill?: boolean
  minColWidth: SmToLg
}

/**
 * minColWidth에 따른 쓰임새
 * - sm: 로그인 페이지 소셜 로그인 버튼들
 *   md: 향기 찾기 페이지 3
 *   lg: 마이페이지 1 피드
 */
const GridContainer = ({
  gap,
  isAutoFill = true,
  minColWidth,
  ...props
}: DivProps & WithGridContainerProps) => {
  const { className, children, ...rest } = props

  return (
    <div
      {...rest}
      className={clsx(
        gridContainerVariants({ gap, isAutoFill, minColWidth }),
        className
      )}
    >
      {children}
    </div>
  )
}

export default GridContainer
