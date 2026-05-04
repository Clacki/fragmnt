import { useMediaQuery } from "@/shared/utils/use-media-query"
import NarrowFooter from "./narrow-footer/NarrowFooter"
import WideFooter from "./wide-footer/WideFooter"

const Footer = () => {
  const { isWide } = useMediaQuery()
  if (isWide) return <WideFooter />
  return <NarrowFooter />
}

export default Footer
