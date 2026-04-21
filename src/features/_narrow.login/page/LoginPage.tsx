import NarrowTitleSection from "@/features/_narrow/components/narrow-title-section/NarrowTitleSection"
import { Button, Hstack, Input, Vstack } from "@/shared/components"
import Labeled from "@/shared/components/inputs/labeled/Labeled"
import HOrVStack from "@/shared/components/layouts/HOrVStack/HOrVStack"
import { Link } from "@tanstack/react-router"
import clsx from "clsx"
import SocialLoginButton from "./social-login-button/SocialLoginButton"
import useLogin from "./use-login/use-login"

const DimLink = ({
  to,
  children,
  className,
}: React.ComponentProps<typeof Link>) => (
  <Link to={to} className={clsx("text-sm text-text-sub", className)}>
    {children}
  </Link>
)

const LoginPage = () => {
  const { errors, register, submitForm } = useLogin()

  return (
    <form onSubmit={submitForm}>
      <Vstack gap="xl">
        <NarrowTitleSection
          title="공간의 완성, 향기의 조각"
          description="fragmnt에서 당신만의 향기 아카이브를 시작하세요"
        />

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
            <DimLink to="/find-email">이메일 찾기</DimLink>
          </Hstack>
        </Labeled>

        <Labeled isError={Boolean(errors.password)}>
          <Labeled.Title>비밀번호</Labeled.Title>
          <Input
            {...register("password")}
            status={errors.password ? "error" : "none"}
            placeholder="비밀번호를 입력해주세요"
          />
          <Hstack className="justify-end">
            <Labeled.Message className="grow">
              {errors.password?.message}
            </Labeled.Message>
            <DimLink to="/find-password">비밀번호 찾기</DimLink>
          </Hstack>
        </Labeled>

        <Button className="mt-lg">로그인</Button>

        <HOrVStack gap="sm" className="mt-lg">
          <SocialLoginButton provider="kakao" />
          <SocialLoginButton provider="google" />
          <SocialLoginButton provider="naver" />
        </HOrVStack>

        <DimLink to="/signup" className="mx-auto">
          아직 계정이 없으신가요?{" "}
          <span className="font-semibold text-text-primary">회원가입</span>하기
        </DimLink>
      </Vstack>
    </form>
  )
}

export default LoginPage
