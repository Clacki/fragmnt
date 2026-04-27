import GoogleSrc from "@/assets/images/login/google.svg"
import KakaoSrc from "@/assets/images/login/kakao.svg"
import NaverSrc from "@/assets/images/login/naver.svg"
import { BASE_URL } from "@/shared/env/env-vars"
import { cva } from "class-variance-authority"
import clsx from "clsx"

type Provider = "kakao" | "google" | "naver"

type ButtonInfo = {
  src: string
  label: string
  onClick: () => void
}
const providerToButtonInfo: Record<Provider, ButtonInfo> = {
  google: {
    src: GoogleSrc,
    label: "Sign in with Google",
    onClick: () => {
      window.location.href =
        "https://fragmnt.pics/api/v1/accounts/social-login/google" // TODO: 카카오로 로그인 병합 후에 BASE_URL 변수 사용
    },
  },
  kakao: {
    src: KakaoSrc,
    label: "카카오로 로그인",
    onClick: () => {
      // plainInstance.get("/accounts/social-login/kakao")
      window.location.href = `${BASE_URL}/accounts/social-login/kakao`
    }, // TODO: need to fill in
  },
  naver: {
    src: NaverSrc,
    label: "네이버로 로그인",
    onClick: () => {
      window.location.href =
        "https://fragmnt.pics/api/v1/accounts/social-login/naver" // TODO: 카카오로 로그인 병합 후에 BASE_URL 변수 사용
    }, // TODO: need to fill in
  },
}

// NOTE: google login 의 디자인 가이드를 따르느라 디자인 토큰을 사용하지 않고 arbitrary value를 그대로 사용하였습니다
const socialLoginButtonVariant = cva(
  "flex items-center gap-[10px] flex-1 py-[10px] px-[12px] rounded-[12px] cursor-pointer hover:brightness-95 transition",
  {
    variants: {
      provider: {
        google:
          "bg-[#ffffff] text-[#000000] outline outline-border -outline-offset-1",
        kakao: "bg-[#FEE500] text-[#000000]/85",
        naver: "bg-[#03A94D] text-[#ffffff]",
      },
    },
  }
)

type SocialLoginButtonProps = {
  provider: Provider
}
const SocialLoginButton = ({ provider }: SocialLoginButtonProps) => {
  const { src, label, onClick } = providerToButtonInfo[provider]
  return (
    <button
      type="button"
      className={clsx(socialLoginButtonVariant({ provider }))}
      onClick={onClick}
    >
      <img src={src} alt="소셜 로그인 로고" className="size-5" />
      <p className="mx-auto">{label}</p>
    </button>
  )
}

export default SocialLoginButton
