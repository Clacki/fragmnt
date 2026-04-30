import NarrowTitleSection from "@/features/_narrow/components/narrow-title-section/NarrowTitleSection"
import { Button, Input, Vstack } from "@/shared/components"
import Labeled from "@/shared/components/inputs/labeled/Labeled"
import PasswordInput from "@/shared/components/inputs/password-input/PasswordInput"
import FindPasswordSuccess from "./find-password-success/FindPasswordSuccess"
import useFindPassword from "./use-find-password/use-find-password"

const FindPasswordPage = () => {
  const {
    errors,
    register,
    submitForm,
    data,
    handleEmailVerificationFirst,
    handleEmailVerificationSecond,
  } = useFindPassword()

  // TODO: api 나오면 응답 타입 확인해야
  if (data) return <FindPasswordSuccess />

  return (
    <form onSubmit={submitForm}>
      <Vstack gap="xl">
        <NarrowTitleSection title="비밀번호 재설정" />

        <Labeled isError={Boolean(errors.email)}>
          <Labeled.Title>이메일</Labeled.Title>
          <Labeled.Body>
            <Input
              {...register("email")}
              placeholder="your@email.com"
              status={errors.email ? "error" : "none"}
            />
            <Button type="button" onClick={handleEmailVerificationFirst}>
              인증
            </Button>
          </Labeled.Body>
          <Labeled.Message>{errors.email?.message}</Labeled.Message>
        </Labeled>

        <Labeled isError={Boolean(errors.email_token)}>
          <Labeled.Title>이메일 인증코드</Labeled.Title>
          <Labeled.Body>
            <Input
              {...register("email_token")}
              status={errors.email_token ? "error" : "none"}
              placeholder="6자리 코드를 입력해주세요"
            />
            <Button type="button" onClick={handleEmailVerificationSecond}>
              확인
            </Button>
          </Labeled.Body>
          <Labeled.Message>{errors.email_token?.message}</Labeled.Message>
        </Labeled>
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
  )
}

export default FindPasswordPage
