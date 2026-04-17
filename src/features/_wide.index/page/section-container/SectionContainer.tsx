import { Vstack } from "@/shared/components"
import clsx from "clsx"
import type { ReactNode } from "react"

type SectionVstackProps = {
  children: ReactNode
  className?: string
}
const SectionVstack = ({ children, className }: SectionVstackProps) => {
  return (
    <Vstack gap="xl" className={clsx("px-2xl bg-amber-50", className)}>
      {children}
    </Vstack>
  )
}

export default SectionVstack
