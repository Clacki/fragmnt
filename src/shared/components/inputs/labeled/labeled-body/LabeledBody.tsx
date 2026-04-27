import { Hstack } from "@/shared/components/layouts"
import type { ReactNode } from "react"

type LabeledBodyProps = {
  children: ReactNode
}

const LabeledBody = ({ children }: LabeledBodyProps) => {
  return <Hstack gap="sm">{children}</Hstack>
}

export default LabeledBody
