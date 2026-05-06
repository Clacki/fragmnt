import NarrowTitleSection from "@/features/_narrow/components/narrow-title-section/NarrowTitleSection"
import { Button, Vstack } from "@/shared/components"
import ErrorToast from "@/shared/components/error-toast/ErrorToast"
import Labeled from "@/shared/components/inputs/labeled/Labeled"
import PasswordInput from "@/shared/components/inputs/password-input/PasswordInput"
import EmailVerificationFields from "@/shared/components/verification-fields/email-verification-fields/EmailVerificationFields"
import FindPasswordSuccess from "./find-password-success/FindPasswordSuccess"
import useFindPassword from "./use-find-password/use-find-password"

const FindPasswordPage = () => {
  const {
    errors,
    register,
    submitForm,
    data,
    useFormReturn,
    mutationError,
    reset,
  } = useFindPassword()

  // TODO: api 나오면 응답 타입 확인해야
  if (data) return <FindPasswordSuccess />

  return (
    <>
      <form onSubmit={submitForm}>
        <Vstack gap="xl">
          <NarrowTitleSection title="비밀번호 재설정" />

          <EmailVerificationFields useFormReturn={useFormReturn} />

          <Labeled isError={Boolean(errors.new_password)}>
            <Labeled.Title>새 비밀번호</Labeled.Title>
            <PasswordInput
              {...register("new_password")}
              isError={Boolean(errors.new_password)}
              placeholder="새 비밀번호를 입력해주세요"
            />
            <Labeled.Message>{errors.new_password?.message}</Labeled.Message>
          </Labeled>

          <Labeled isError={Boolean(errors.new_password_confirm)}>
            <Labeled.Title>새 비밀번호 확인</Labeled.Title>
            <PasswordInput
              {...register("new_password_confirm")}
              isError={Boolean(errors.new_password_confirm)}
              placeholder="새 비밀번호를 다시 입력해주세요"
            />
            <Labeled.Message>
              {errors.new_password_confirm?.message}
            </Labeled.Message>
          </Labeled>

          <Button className="mt-lg">비밀번호 재설정</Button>
        </Vstack>
      </form>

      <ErrorToast
        isOn={Boolean(mutationError)}
        onClose={reset}
        error={mutationError}
      />
    </>
  )
}

export default FindPasswordPage
