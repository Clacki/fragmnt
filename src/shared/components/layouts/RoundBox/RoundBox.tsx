import type { DivProps } from "@/shared/types"
import type {
  None,
  SmToLg,
  XsTo2xl,
} from "@/shared/types/commonPropsTypes/commonPropsTypes"
import { paddingVariants } from "@/shared/utils/variant-to-classname"
import { cva } from "class-variance-authority"
import clsx from "clsx"

const roundBoxVariants = cva("", {
  variants: {
    padding: paddingVariants,
    isBordered: {
      true: "border border-gray/20",
      false: "",
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
    },
    isShadowed: {
      true: "shadow-box",
      false: "",
    },
  },
})

interface WithRoundBoxProps {
  radius?: SmToLg | None
  padding?: XsTo2xl | None
  isBordered?: boolean
  isShadowed?: boolean
}

/**
 * 둥근 상자를 만드는 데에 사용
 * default radius = "lg" (20px)
 * default padding = "lg" (16px)
 */
const RoundBox = ({
  radius = "lg",
  padding = "lg",
  isBordered,
  isShadowed,
  ...props
}: WithRoundBoxProps & DivProps) => {
  const { className, children, ...rest } = props
  return (
    <div
      {...rest}
      className={clsx(
        roundBoxVariants({ radius, padding, isBordered, isShadowed }),
        className,
        "p-10"
      )}
    >
      {children}
    </div>
  )
}

export default RoundBox
