import { Vstack } from "@/shared/components"
import clsx from "clsx"
import type { ReactNode } from "react"

type SectionVstackProps = {
  children: ReactNode
  className?: string
  id?: string
}
const SectionVstack = ({ children, className, id }: SectionVstackProps) => {
  return (
    <Vstack gap="xl" className={clsx("px-2xl", className)} id={id}>
      {children}
    </Vstack>
  )
}

export default SectionVstack
