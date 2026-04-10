import type { DivProps } from "@/shared/types"
import type {
  None,
  SmToLg,
  XsToXl,
} from "@/shared/types/commonPropsTypes/commonPropsTypes"
import { paddingVariants } from "@/shared/utils/variantToClassName"
import { cva } from "class-variance-authority"
import clsx from "clsx"
import type { Color } from "storybook/theming"

const roundBoxVariants = cva("", {
  variants: {
    padding: paddingVariants,
    isBordered: {
      true: "border border-iua-fg-dim",
      false: "",
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
    },
    isShadowed: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      radius: "sm",
      isShadowed: true,
      className: "shadow-iua-sm",
    },
    {
      radius: "md",
      isShadowed: true,
      className: "shadow-iua-md",
    },
    {
      radius: "lg",
      isShadowed: true,
      className: "shadow-iua-lg",
    },
  ],
})

interface WithRoundBoxProps {
  radius?: SmToLg | None
  padding?: XsToXl | None
  color?: Color
  isBordered?: boolean
  isShadowed?: boolean
}
const RoundBox = ({
  radius,
  padding,
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
        className
      )}
    >
      {children}
    </div>
  )
}

export default RoundBox
