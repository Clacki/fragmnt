import { Vstack } from "@/shared/components"

type NarrowTitleSectionProps = {
  title: string
  description?: string
}
const NarrowTitleSection = ({
  title,
  description,
}: NarrowTitleSectionProps) => {
  return (
    <Vstack gap="md" className="items-center">
      <h1 className="text-lg font-bold">{title}</h1>
      <p className="text-text-sub">{description}</p>
    </Vstack>
  )
}

export default NarrowTitleSection
