import Flower from "@/assets/images/footer/flower.svg"
import Instagram from "@/assets/images/footer/Instagram.svg.tsx"
import Kakao from "@/assets/images/footer/Kakao.svg.tsx"
import Youtube from "@/assets/images/footer/Youtube.svg.tsx"
import type { FileRoutesByFullPath } from "@/routeTree.gen"
import { FlexOneContainer, Hstack, RoundBox, Vstack } from "@/shared/components"
import type { SvgProps } from "@/shared/types"
import { useNavigate } from "@tanstack/react-router"
import clsx from "clsx"
import type { JSX } from "react"

type SnsButtonProps = {
  SvgInReact: (props: SvgProps) => JSX.Element
  to: string
}
const SnsButton = ({ SvgInReact, to }: SnsButtonProps) => {
  // NOTE: BackButton과 SnsButton이 형태적으로 많이 유사합니다
  // NOTE: 비슷한 또 다른 동그라미 버튼이 있다면 공통 컴포넌트로 만드는 것도 고려할만 할 것 같습니다
  const handleClick = () => {
    window.location.href = to
  }
  return (
    <button
      onClick={handleClick}
      className="transition text-button/50 hover:bg-button hover:text-card rounded-full border border-border p-xs"
    >
      <SvgInReact className="size-6" />
    </button>
  )
}

type FooterButtonProps = {
  to: keyof FileRoutesByFullPath
  isDim?: boolean
  children: string
}
const FooterButton = ({ to, isDim, children }: FooterButtonProps) => {
  const navigate = useNavigate()
  return (
    <button
      className={clsx(
        "text-sm text-left cursor-pointer",
        isDim ? "text-text-disabled" : "text-text-footer"
      )}
      onClick={() => navigate({ to })}
    >
      {children}
    </button>
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
            <FooterButton to="/">About</FooterButton>
            <FooterButton to="/">Scent Recommendation</FooterButton>
            <FooterButton to="/">Feed</FooterButton>
            <FooterButton to="/">My Page</FooterButton>
          </Vstack>
        </FlexOneContainer>
        <FooterButton to="/" isDim>
          Privacy Policy
        </FooterButton>
      </Vstack>

      <Vstack>
        <FlexOneContainer>
          <Vstack>
            <h3 className="text-text-disabled text-sm">CONNECT</h3>
            <FooterButton to="/">fragmnt studio</FooterButton>
            <FooterButton to="/">Onepiece@fragmnt.co</FooterButton>
            <Hstack>
              <SnsButton to="https://www.google.com" SvgInReact={Instagram} />
              <SnsButton to="https://www.google.com" SvgInReact={Kakao} />
              <SnsButton to="https://www.google.com" SvgInReact={Youtube} />
            </Hstack>
          </Vstack>
        </FlexOneContainer>
        <FooterButton to="/" isDim>
          Terms of Service
        </FooterButton>
      </Vstack>
    </RoundBox>
  )
}

export default Footer
