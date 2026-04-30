import NarrowTitleSection from "@/features/_narrow/components/narrow-title-section/NarrowTitleSection"
import { Button, Input, Vstack } from "@/shared/components"
import Labeled from "@/shared/components/inputs/labeled/Labeled"
import FindEmailSuccess from "./find-email-success/FindEmailSuccess"
import useFindEmail from "./use-find-email/use-find-email"

const FindEmailPage = () => {
  const {
    data,
    errors,
    register,
    submitForm,
    handlePhoneVerificationFirst,
    handlePhoneVerificationSecond,
  } = useFindEmail()

  // TODO: api 나오면 응답 타입 확인해야
  if (data) return <FindEmailSuccess email={data.data.email as string} />

  return (
    <form onSubmit={submitForm}>
      <Vstack gap="xl">
        <NarrowTitleSection
          title="이메일 찾기"
          description="가입 시 등록한 정보를 입력해주세요"
        />

        <Labeled isError={Boolean(errors.name)}>
          <Labeled.Title>이름</Labeled.Title>
          <Input
            {...register("name")}
            placeholder="이름을 입력해주세요"
            status={errors.name ? "error" : "none"}
          />
          <Labeled.Message className="grow">
            {errors.name?.message}
          </Labeled.Message>
        </Labeled>

        <Labeled isError={Boolean(errors.phone_number)}>
          <Labeled.Title>전화번호</Labeled.Title>
          <Labeled.Body>
            <Input
              {...register("phone_number")}
              status={errors.phone_number ? "error" : "none"}
              type="number"
              placeholder={`"-"없이 숫자만 입력해주세요`}
              className="grow"
            />
            <Button type="button" onClick={handlePhoneVerificationFirst}>
              인증
            </Button>
          </Labeled.Body>
          <Labeled.Message>{errors.phone_number?.message}</Labeled.Message>
        </Labeled>

        <Labeled isError={Boolean(errors.phone_token)}>
          <Labeled.Title>전화번호 인증코드</Labeled.Title>
          <Labeled.Body>
            <Input
              {...register("phone_token")}
              status={errors.phone_token ? "error" : "none"}
              placeholder="6자리 코드를 입력해주세요"
            />
            <Button type="button" onClick={handlePhoneVerificationSecond}>
              확인
            </Button>
          </Labeled.Body>
          <Labeled.Message>{errors.phone_token?.message}</Labeled.Message>
        </Labeled>

        <Button className="mt-lg">이메일 찾기</Button>
      </Vstack>
    </form>
  )
}

export default FindEmailPage
