import NarrowTitleSection from "@/features/_narrow/components/narrow-title-section/NarrowTitleSection"
import { Button, Input, Vstack } from "@/shared/components"
import Labeled from "@/shared/components/inputs/labeled/Labeled"
import PasswordInput from "@/shared/components/inputs/password-input/PasswordInput"
import EmailVerificationFields from "@/shared/components/verification-fields/email-verification-fields/EmailVerificationFields"
import PhoneVerificationFields from "@/shared/components/verification-fields/phone-verification-fields/PhoneVerificationFields"
import { useNavigate } from "@tanstack/react-router"
import SignupModals from "./signup-modals/SignupModals"
import useSignup from "./use-signup/use-signup"

const isMockServer = import.meta.env.VITE_ENABLE_MSW === "true"

const DemoSignupGuide = () => {
  const navigate = useNavigate()

  return (
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
          포트폴리오 데모 환경에서는 아래 계정으로 서비스를 체험할 수 있습니다.
        </p>

        <div className="mt-4 grid gap-2">
          <div className="rounded-2xl bg-white px-md py-sm shadow-sm">
            <p className="text-xs text-text-sub">이메일</p>
            <p className="mt-1 font-medium text-text-primary">demo@demo.com</p>
          </div>

          <div className="rounded-2xl bg-white px-md py-sm shadow-sm">
            <p className="text-xs text-text-sub">비밀번호</p>
            <p className="mt-1 font-medium text-text-primary">demo</p>
          </div>
        </div>
      </div>

      <Button
        type="button"
        className="mt-lg w-full"
        onClick={() => navigate({ to: "/login" })}
      >
        로그인하기
      </Button>
    </Vstack>
  )
}

const SignupForm = () => {
  const {
    errors,
    register,
    submitForm,
    useFormReturns: useFormReturn,
  } = useSignup()

  return (
    <>
      <form onSubmit={submitForm}>
        <Vstack gap="xl">
          <NarrowTitleSection
            title="공간의 완성, 향기의 조각"
            description="fragmnt에서 당신만의 향기 아카이브를 시작하세요"
          />

          <EmailVerificationFields useFormReturn={useFormReturn} />

          <Labeled isError={Boolean(errors.password)}>
            <Labeled.Title>비밀번호</Labeled.Title>
            <PasswordInput
              {...register("password")}
              isError={Boolean(errors.password)}
              placeholder="영문, 숫자를 포함해 6자리 이상으로 만들어주세요"
            />
            <Labeled.Message>{errors.password?.message}</Labeled.Message>
          </Labeled>

          <Labeled isError={Boolean(errors.name)}>
            <Labeled.Title>이름</Labeled.Title>
            <Input
              {...register("name")}
              status={errors.name ? "error" : "none"}
              placeholder="이름을 입력해주세요"
            />
            <Labeled.Message>{errors.name?.message}</Labeled.Message>
          </Labeled>

          <PhoneVerificationFields useFormReturn={useFormReturn} />

          <Labeled isError={Boolean(errors.birthday)}>
            <Labeled.Title>생년월일</Labeled.Title>
            <Input
              {...register("birthday")}
              type="number"
              status={errors.birthday ? "error" : "none"}
              placeholder="8자리 숫자 입력 (예: 19980514)"
            />
            <Labeled.Message>{errors.birthday?.message}</Labeled.Message>
          </Labeled>

          <Button className="mt-lg">회원가입</Button>
        </Vstack>
      </form>

      <SignupModals />
    </>
  )
}

const SignupPage = () => {
  if (isMockServer) {
    return <DemoSignupGuide />
  }

  return <SignupForm />
}

export default SignupPage
