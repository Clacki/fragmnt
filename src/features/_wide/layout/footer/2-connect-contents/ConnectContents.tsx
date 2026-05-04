import Instagram from "@/assets/images/footer/Instagram.svg"
import Kakao from "@/assets/images/footer/Kakao.svg"
import Youtube from "@/assets/images/footer/Youtube.svg"
import { Hstack } from "@/shared/components"
import type { SvgProps } from "@/shared/types"
import { Link } from "@tanstack/react-router"
import type { JSX } from "react"
import FooterLink from "../footer-link/FooterLink"

type SnsLinkProps = {
  SvgInReact: (props: SvgProps) => JSX.Element
  to: string
}
const SnsLink = ({ SvgInReact, to }: SnsLinkProps) => {
  // NOTE: BackButton과 SnsButton이 형태적으로 많이 유사합니다
  // NOTE: 비슷한 또 다른 동그라미 버튼이 있다면 공통 컴포넌트로 만드는 것도 고려할만 할 것 같습니다
  const handleClick = () => {
    window.location.href = to
  }
  return (
    <Link
      onClick={handleClick}
      className="transition text-button/50 hover:bg-button hover:text-card rounded-full border border-border p-xs"
      to={to}
    >
      <SvgInReact className="size-6" />
    </Link>
  )
}

const ConnectContents = () => {
  return (
    <>
      <h3 className="text-text-disabled text-sm">CONNECT</h3>
      <FooterLink to="/">fragmnt studio</FooterLink>
      <FooterLink to="/">Onepiece@fragmnt.co</FooterLink>
      <Hstack className="justify-start">
        <SnsLink to="https://www.google.com" SvgInReact={Instagram} />
        <SnsLink to="https://www.google.com" SvgInReact={Kakao} />
        <SnsLink to="https://www.google.com" SvgInReact={Youtube} />
      </Hstack>
    </>
  )
}

export default ConnectContents
