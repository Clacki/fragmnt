import type { DivProps } from "@/shared/types"
import type {
  None,
  XsTo2xl,
} from "@/shared/types/commonPropsTypes/commonPropsTypes"
import { gapVariants } from "@/shared/utils/variantToClassName"
import { cva } from "class-variance-authority"
import clsx from "clsx"

const vstackVariants = cva("flex flex-col", {
  variants: {
    gap: gapVariants,
  },
})

interface WithVstackProps {
  gap: XsTo2xl | None
}

const Vstack = ({ gap, ...props }: DivProps & WithVstackProps) => {
  const { className, children, ...rest } = props

  return (
    <div {...rest} className={clsx(vstackVariants({ gap }), className)}>
      {children}
    </div>
  )
}

export default Vstack
