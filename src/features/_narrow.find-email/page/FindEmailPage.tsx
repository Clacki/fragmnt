import NarrowTitleSection from "@/features/_narrow/components/narrow-title-section/NarrowTitleSection"
import { Button, Hstack, Input, Vstack } from "@/shared/components"
import Labeled from "@/shared/components/inputs/labeled/Labeled"
import FindEmailSuccess from "./find-email-success/FindEmailSuccess"
import useFindEmail from "./use-find-email/use-find-email"

const FindEmailPage = () => {
  const { data, errors, register, submitForm } = useFindEmail()

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

        <Labeled isError={Boolean(errors.phone)}>
          <Labeled.Title>전화번호</Labeled.Title>
          <Hstack gap="sm">
            <Input
              {...register("phone")}
              status={errors.phone ? "error" : "none"}
              type="number"
              placeholder={`"-"없이 숫자만 입력해주세요`}
              className="grow"
            />
            <Button type="button">인증</Button>
          </Hstack>
          <Labeled.Message>{errors.phone?.message}</Labeled.Message>
        </Labeled>

        <Labeled isError={Boolean(errors.phoneVerification)}>
          <Labeled.Title>전화번호 인증코드</Labeled.Title>
          <Input
            {...register("phoneVerification")}
            status={errors.phoneVerification ? "error" : "none"}
            placeholder="6자리 코드를 입력해주세요"
          />
          <Labeled.Message>{errors.phoneVerification?.message}</Labeled.Message>
        </Labeled>

        <Button className="mt-lg">이메일 찾기</Button>
      </Vstack>
    </form>
  )
}

export default FindEmailPage
