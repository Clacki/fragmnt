import NarrowTitleSection from "@/features/_narrow/components/narrow-title-section/NarrowTitleSection"
import { Button, Input, Vstack } from "@/shared/components"
import ErrorToast from "@/shared/components/error-toast/ErrorToast"
import Labeled from "@/shared/components/inputs/labeled/Labeled"
import PhoneVerificationFields from "@/shared/components/verification-fields/phone-verification-fields/PhoneVerificationFields"
import FindEmailSuccess from "./find-email-success/FindEmailSuccess"
import useFindEmail from "./use-find-email/use-find-email"

const FindEmailPage = () => {
  const {
    data,
    errors,
    register,
    submitForm,
    useFormReturn,
    mutationError,
    reset,
  } = useFindEmail()

  // TODO: api 나오면 응답 타입 확인해야
  if (data) return <FindEmailSuccess email={data.data.email} />

  return (
    <>
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

          <PhoneVerificationFields useFormReturn={useFormReturn} />

          <Button className="mt-lg">이메일 찾기</Button>
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

export default FindEmailPage
