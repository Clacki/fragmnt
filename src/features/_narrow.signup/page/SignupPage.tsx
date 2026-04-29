import NarrowTitleSection from "@/features/_narrow/components/narrow-title-section/NarrowTitleSection"
import { Button, Input, Vstack } from "@/shared/components"
import Labeled from "@/shared/components/inputs/labeled/Labeled"
import PasswordInput from "@/shared/components/inputs/password-input/PasswordInput"
import EmailVerificationFields from "@/shared/components/verification-fields/email-verification-fields/EmailVerificationFields"
import PhoneVerificationFields from "@/shared/components/verification-fields/phone-verification-fields/PhoneVerificationFields"
import SignupModals from "./signup-modals/SignupModals"
import useSignup from "./use-signup/use-signup"

const SignupPage = () => {
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

export default SignupPage
