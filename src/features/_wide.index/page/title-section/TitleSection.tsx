import { Vstack } from "@/shared/components"
import type { ReactNode } from "react"

type TitleSectionProps = {
  smallTitle: string
  bigTitle: string
  subtitle: ReactNode
}
const TitleSection = ({
  smallTitle,
  bigTitle,
  subtitle,
}: TitleSectionProps) => {
  return (
    <Vstack className="items-center">
      <h2 className="text-text-sub">{smallTitle}</h2>
      <h3 className="text-xl font-bold">{bigTitle}</h3>
      {subtitle}
    </Vstack>
  )
}

export default TitleSection
