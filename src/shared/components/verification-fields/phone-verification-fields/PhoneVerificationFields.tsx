import type { Path, UseFormReturn } from "react-hook-form"
import { Button, Input } from "../../inputs"
import Labeled from "../../inputs/labeled/Labeled"
import type { PhoneFields } from "../types/use-form-return.type"
import usePhoneVerification from "./use-phone-verification-fields/use-phone-verification-fields"

type PhoneVerificationFieldsProps<TFieldValues extends PhoneFields> = {
  useFormReturn: UseFormReturn<TFieldValues>
}
const PhoneVerificationFields = <TFieldValues extends PhoneFields>({
  useFormReturn,
}: PhoneVerificationFieldsProps<TFieldValues>) => {
  const {
    register,
    formState: { errors },
  } = useFormReturn

  const {
    phoneFirstData,
    phoneFirstIsPending,
    phoneFirstMutate,
    phoneSecondData,
    phoneSecondIsPending,
    phoneSecondMutate,
  } = usePhoneVerification(useFormReturn)

  const secondInputStatus = errors.phone_token
    ? "error"
    : phoneSecondData
      ? "success"
      : "none"

  return (
    <>
      <Labeled isError={Boolean(errors.phone_number)}>
        <Labeled.Title>전화번호</Labeled.Title>
        <Labeled.Body>
          <Input
            {...register("phone_number" as Path<TFieldValues>)}
            status={errors.phone_number ? "error" : "none"}
            type="number"
            placeholder={`"-"없이 숫자만 입력해주세요`}
          />
          <Button
            type="button"
            onClick={() => phoneFirstMutate()}
            disabled={phoneFirstIsPending}
          >
            인증
          </Button>
        </Labeled.Body>
        <Labeled.Message>
          {errors.phone_number?.message as string}
        </Labeled.Message>
        <Labeled.Message>{phoneFirstData?.data.detail}</Labeled.Message>
      </Labeled>

      <Labeled isError={Boolean(errors.phone_token)}>
        <Labeled.Title>전화번호 인증코드</Labeled.Title>
        <Labeled.Body>
          <Input
            {...register("phone_token" as Path<TFieldValues>)}
            status={secondInputStatus}
            placeholder="6자리 코드를 입력해주세요"
          />
          <Button
            type="button"
            onClick={() => phoneSecondMutate()}
            disabled={phoneSecondIsPending}
          >
            확인
          </Button>
        </Labeled.Body>
        <Labeled.Message>
          {errors.phone_token?.message as string}
        </Labeled.Message>
        <Labeled.Message>{phoneSecondData?.data.detail}</Labeled.Message>
      </Labeled>
    </>
  )
}

export default PhoneVerificationFields
