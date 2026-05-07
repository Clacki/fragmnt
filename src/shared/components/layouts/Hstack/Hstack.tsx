import cn from "@/lib/utils"
import type { DivProps } from "@/shared/types"
import type {
  None,
  XsTo2xl,
} from "@/shared/types/commonPropsTypes/commonPropsTypes"
import { gapVariants } from "@/shared/utils/variant-to-classname"
import { cva } from "class-variance-authority"

const hstackVariants = cva("min-w-0 flex justify-center", {
  variants: {
    gap: gapVariants,
  },
})

export interface WithHstackProps {
  gap?: XsTo2xl | None
}

/**
 * 가로 배치시 사용
 * default gap: lg (16px)
 * */
const Hstack = ({ gap = "lg", ...props }: DivProps & WithHstackProps) => {
  const { className, children, ...rest } = props

  return (
    <div {...rest} className={cn(hstackVariants({ gap }), className)}>
      {children}
    </div>
  )
}

export default Hstack
