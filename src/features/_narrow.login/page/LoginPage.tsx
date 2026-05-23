import NarrowTitleSection from "@/features/_narrow/components/narrow-title-section/NarrowTitleSection"
import { Button, Hstack, Input, Toast, Vstack } from "@/shared/components"
import Labeled from "@/shared/components/inputs/labeled/Labeled"
import PasswordInput from "@/shared/components/inputs/password-input/PasswordInput"
import HOrVStack from "@/shared/components/layouts/HOrVStack/HOrVStack"
import { Link, useSearch } from "@tanstack/react-router"
import clsx from "clsx"
import { useEffect, useState, type ReactNode } from "react"
import SocialLoginButton from "./social-login-button/SocialLoginButton"
import useLogin from "./use-login/use-login"

const isMockServer = import.meta.env.VITE_API_MOCKING === "enabled"

type DimLinkProps = {
  to: React.ComponentProps<typeof Link>["to"]
  children: ReactNode
  className?: string
  onClick?: () => void
}

const DimLink = ({ to, children, className, onClick }: DimLinkProps) => {
  const linkClassName = clsx("text-sm text-text-sub", className)

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={linkClassName}>
        {children}
      </button>
    )
  }

  return (
    <Link to={to} className={linkClassName}>
      {children}
    </Link>
  )
}

type LoginToast = {
  variant: "error"
  message: string
}

const LoginPage = () => {
  const { errors, register, submitForm } = useLogin()
  const { reason } = useSearch({ from: "/_narrow/login" })

  const [toast, setToast] = useState<LoginToast | null>(
    reason === "unauthorized"
      ? {
          variant: "error",
          message: "로그인이 필요한 서비스입니다.",
        }
      : null
  )

  useEffect(() => {
    if (!toast) return

    const timer = setTimeout(() => {
      setToast(null)
    }, 3000)

    return () => clearTimeout(timer)
  }, [toast])

  const showDemoBlockedToast = (message: string) => {
    setToast({
      variant: "error",
      message,
    })
  }

  const handleSocialLoginClick = () => {
    if (!isMockServer) return

    showDemoBlockedToast(
      "데모 환경에서는 소셜 로그인이 제한됩니다. 데모 계정으로 로그인해주세요."
    )
  }

  const handleFindAccountClick = () => {
    if (!isMockServer) return

    showDemoBlockedToast(
      "데모 환경에서는 계정 찾기 기능이 제한됩니다. 데모 계정으로 로그인해주세요."
    )
  }

  return (
    <div>
      {toast && (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center">
          <div className="relative">
            <Toast variant={toast.variant} message={toast.message} />
          </div>
        </div>
      )}

      <form onSubmit={submitForm}>
        <Vstack gap="xl">
          <NarrowTitleSection
            title="공간의 완성, 향기의 조각"
            description="fragmnt에서 당신만의 향기 아카이브를 시작하세요"
          />

          <div className="rounded-2xl border border-border bg-surface-default p-lg text-sm text-text-sub shadow-sm">
            <p className="mb-2 text-sm font-semibold text-text-primary">
              데모 계정 안내
            </p>

            <p className="break-keep leading-relaxed">
              포트폴리오 데모 환경에서는 아래 계정으로 서비스를 체험할 수
              있습니다.
            </p>

            <div className="mt-4 grid gap-2">
              <div className="rounded-2xl bg-white px-md py-sm shadow-sm">
                <p className="text-xs text-text-sub">이메일</p>
                <p className="mt-1 font-medium text-text-primary">
                  demo@demo.com
                </p>
              </div>

              <div className="rounded-2xl bg-white px-md py-sm shadow-sm">
                <p className="text-xs text-text-sub">비밀번호</p>
                <p className="mt-1 font-medium text-text-primary">demo</p>
              </div>
            </div>
          </div>

          <Labeled isError={Boolean(errors.email)}>
            <Labeled.Title>이메일</Labeled.Title>
            <Input
              {...register("email")}
              placeholder="your@email.com"
              status={errors.email ? "error" : "none"}
            />

            <Hstack className="justify-end">
              <Labeled.Message className="grow">
                {errors.email?.message}
              </Labeled.Message>

              <DimLink
                to="/find-email"
                onClick={isMockServer ? handleFindAccountClick : undefined}
              >
                이메일 찾기
              </DimLink>
            </Hstack>
          </Labeled>

          <Labeled isError={Boolean(errors.password)}>
            <Labeled.Title>비밀번호</Labeled.Title>
            <PasswordInput
              {...register("password")}
              isError={Boolean(errors.password)}
              placeholder="비밀번호를 입력해주세요"
            />

            <Hstack className="justify-end">
              <Labeled.Message className="grow">
                {errors.password?.message}
              </Labeled.Message>

              <DimLink
                to="/find-password"
                onClick={isMockServer ? handleFindAccountClick : undefined}
              >
                비밀번호 찾기
              </DimLink>
            </Hstack>
          </Labeled>

          <Button className="mt-lg">로그인</Button>

          <HOrVStack gap="sm" className="mt-lg">
            <SocialLoginButton
              provider="kakao"
              onClick={isMockServer ? handleSocialLoginClick : undefined}
            />
            <SocialLoginButton
              provider="google"
              onClick={isMockServer ? handleSocialLoginClick : undefined}
            />
            <SocialLoginButton
              provider="naver"
              onClick={isMockServer ? handleSocialLoginClick : undefined}
            />
          </HOrVStack>

          <DimLink to="/signup" className="mx-auto">
            아직 계정이 없으신가요?{" "}
            <span className="font-semibold text-text-primary">회원가입</span>
            하기
          </DimLink>
        </Vstack>
      </form>
    </div>
  )
}

export default LoginPage
