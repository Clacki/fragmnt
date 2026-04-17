import type { DivProps } from "@/shared/types"
import { useMediaQuery } from "@/shared/utils/use-media-query"
import Hstack, { type WithHstackProps } from "../Hstack/Hstack"
import Vstack from "../Vstack/Vstack"

type WithHOrVStackProps = {
  threshhold?: number
}
const HOrVStack = ({
  threshhold,
  ...props
}: DivProps & WithHstackProps & WithHOrVStackProps) => {
  const { children, ...rest } = props
  const { isWide } = useMediaQuery(threshhold)

  if (isWide) return <Hstack {...rest}>{children}</Hstack>
  return <Vstack {...rest}>{children}</Vstack>
}

export default HOrVStack
