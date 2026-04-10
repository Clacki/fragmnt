import type { DivProps } from "@/shared/types"
import type {
  None,
  SmToLg,
  XsToXl,
} from "@/shared/types/commonPropsTypes/commonPropsTypes"
import { gapVariants } from "@/shared/utils/variantToClassName"
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
const GridContainer = ({
  gap = "md",
  isAutoFill = true,
  minColWidth = "md",
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
