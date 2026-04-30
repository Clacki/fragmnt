import type { UseFormReturn } from "react-hook-form"
import { Button, Input } from "../../inputs"
import Labeled from "../../inputs/labeled/Labeled"
import type { EmailFields } from "../types/use-form-return.type"
import useEmailVerification from "./use-email-verification/use-email-verification"

type EmailVerificationFieldsProps<TFieldValues extends EmailFields> = {
  useFormReturn: UseFormReturn<TFieldValues>
}
const EmailVerificationFields = <TFieldValues extends EmailFields>({
  useFormReturn,
}: EmailVerificationFieldsProps<TFieldValues>) => {
  const {
    register,
    formState: { errors },
  } = useFormReturn as unknown as UseFormReturn<EmailFields> // NOTE: 타입을 강제해서 이 이하에서는 type assertion이 필요 없게 합니다

  const {
    emailFirstData,
    emailFirstIsPending,
    emailFirstMutate,
    emailSecondData,
    emailSecondIsPending,
    emailSecondMutate,
  } = useEmailVerification(useFormReturn)

  const secondInputStatus = errors.email_token
    ? "error"
    : emailSecondData
      ? "success"
      : "none"

  return (
    <>
      <Labeled isError={Boolean(errors.email)}>
        <Labeled.Title>이메일</Labeled.Title>
        <Labeled.Body>
          <Input
            {...register("email")}
            placeholder="your@email.com"
            status={errors.email ? "error" : "none"}
          />
          <Button
            type="button"
            onClick={() => emailFirstMutate()}
            disabled={emailFirstIsPending}
          >
            인증
          </Button>
        </Labeled.Body>
        <Labeled.Message>{errors.email?.message as string}</Labeled.Message>
        <Labeled.Message>{emailFirstData?.data.detail}</Labeled.Message>
      </Labeled>

      <Labeled isError={Boolean(errors.email_token)}>
        <Labeled.Title>이메일 인증코드</Labeled.Title>
        <Labeled.Body>
          <Input
            {...register("email_token")}
            status={secondInputStatus}
            placeholder="6자리 코드를 입력해주세요"
          />
          <Button
            type="button"
            onClick={() => emailSecondMutate()}
            disabled={emailSecondIsPending}
          >
            확인
          </Button>
        </Labeled.Body>
        <Labeled.Message>
          {errors.email_token?.message as string}
        </Labeled.Message>
        <Labeled.Message>{emailSecondData?.data.detail}</Labeled.Message>
      </Labeled>
    </>
  )
}

export default EmailVerificationFields
