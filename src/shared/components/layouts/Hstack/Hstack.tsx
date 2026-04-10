import type { DivProps } from "@/shared/types"
import type {
  None,
  XsTo2xl,
} from "@/shared/types/commonPropsTypes/commonPropsTypes"
import { gapVariants } from "@/shared/utils/variantToClassName"
import { cva } from "class-variance-authority"
import clsx from "clsx"

const hstackVariants = cva("flex", {
  variants: {
    gap: gapVariants,
  },
})

interface WithHstackProps {
  gap?: XsTo2xl | None
}

/**
 * 가로 배치시 사용
 * default gap: lg (16px)
 * */
const Hstack = ({ gap = "lg", ...props }: DivProps & WithHstackProps) => {
  const { className, children, ...rest } = props

  return (
    <div {...rest} className={clsx(hstackVariants({ gap }), className)}>
      {children}
    </div>
  )
}

export default Hstack
