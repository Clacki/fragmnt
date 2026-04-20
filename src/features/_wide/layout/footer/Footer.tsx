import Flower from "@/assets/images/footer/flower.svg"
import Instagram from "@/assets/images/footer/Instagram.svg.tsx"
import Kakao from "@/assets/images/footer/Kakao.svg.tsx"
import Youtube from "@/assets/images/footer/Youtube.svg.tsx"
import { FlexOneContainer, Hstack, RoundBox, Vstack } from "@/shared/components"
import type { SvgProps } from "@/shared/types"
import { Link, type LinkProps } from "@tanstack/react-router"
import clsx from "clsx"
import type { JSX } from "react"

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

type FooterButtonProps = {
  to: LinkProps["to"]
  isDim?: boolean
  children: string
}
const FooterLink = ({ to, isDim, children }: FooterButtonProps) => {
  return (
    <Link
      className={clsx(
        "text-sm text-left cursor-pointer",
        isDim ? "text-text-disabled" : "text-text-footer"
      )}
      to={to}
    >
      {children}
    </Link>
  )
}

const Footer = () => {
  // TODO: 외부 url 연결해야
  // TODO: 내부 navigate 연결해야
  return (
    <RoundBox
      padding="2xl"
      radius="none"
      className="bg-surface-default grid grid-cols-4 gap-xl"
    >
      <Vstack gap="none" className="col-span-2">
        <FlexOneContainer>
          <Vstack gap="sm">
            <h3 className="text-xl font-league-gothic">fragmnt</h3>
            <p className="text-text-sub">Where scent meets space.</p>
            <p className="text-text-sub">
              A quiet invitation to breathe, feel, and belong.
            </p>
          </Vstack>
        </FlexOneContainer>
        <Vstack>
          <img src={Flower} className="max-w-17.5 mt-17.5" />
          <p className="text-text-disabled text-sm">
            © 2026 fragmnt. All rights reserved.
          </p>
        </Vstack>
      </Vstack>

      <Vstack>
        <FlexOneContainer>
          <Vstack>
            <h3 className="text-text-disabled text-sm">EXPLORE</h3>
            <FooterLink to="/">About</FooterLink>
            <FooterLink to="/">Scent Recommendation</FooterLink>
            <FooterLink to="/">Feed</FooterLink>
            <FooterLink to="/">My Page</FooterLink>
          </Vstack>
        </FlexOneContainer>
        <FooterLink to="/" isDim>
          Privacy Policy
        </FooterLink>
      </Vstack>

      <Vstack>
        <FlexOneContainer>
          <Vstack>
            <h3 className="text-text-disabled text-sm">CONNECT</h3>
            <FooterLink to="/">fragmnt studio</FooterLink>
            <FooterLink to="/">Onepiece@fragmnt.co</FooterLink>
            <Hstack>
              <SnsLink to="https://www.google.com" SvgInReact={Instagram} />
              <SnsLink to="https://www.google.com" SvgInReact={Kakao} />
              <SnsLink to="https://www.google.com" SvgInReact={Youtube} />
            </Hstack>
          </Vstack>
        </FlexOneContainer>
        <FooterLink to="/" isDim>
          Terms of Service
        </FooterLink>
      </Vstack>
    </RoundBox>
  )
}

export default Footer
