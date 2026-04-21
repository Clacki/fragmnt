import NarrowTitleSection from "@/features/_narrow/components/narrow-title-section/NarrowTitleSection"
import { Button, Input, Vstack } from "@/shared/components"
import Labeled from "@/shared/components/inputs/labeled/Labeled"
import FindPasswordSuccess from "./find-password-success/FindPasswordSuccess"
import useFindPassword from "./use-find-password/use-find-password"

const FindPasswordPage = () => {
  const { errors, register, submitForm, data } = useFindPassword()

  // TODO: api 나오면 응답 타입 확인해야
  if (data) return <FindPasswordSuccess />

  return (
    <form onSubmit={submitForm}>
      <Vstack gap="xl">
        <NarrowTitleSection title="비밀번호 재설정" />

        <Labeled isError={Boolean(errors.new_password)}>
          <Labeled.Title>새 비밀번호</Labeled.Title>
          <Input
            {...register("new_password")}
            type="password"
            status={errors.new_password ? "error" : "none"}
            placeholder="새 비밀번호를 입력해주세요"
          />
          <Labeled.Message>{errors.new_password?.message}</Labeled.Message>
        </Labeled>

        <Labeled isError={Boolean(errors.new_password_confirm)}>
          <Labeled.Title>새 비밀번호 확인</Labeled.Title>
          <Input
            {...register("new_password_confirm")}
            type="password"
            status={errors.new_password_confirm ? "error" : "none"}
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
