import { plainInstance } from "@/shared/api/axios-instance"
import { useMutation } from "@tanstack/react-query"
import type { AxiosError } from "axios"
import type { UseFormReturn } from "react-hook-form"
import type { PhoneFields } from "../../types/use-form-return.type"

const usePhoneVerification = <TFieldValues extends PhoneFields>(
  useFormReturns: UseFormReturn<TFieldValues>
) => {
  const { watch, setError, clearErrors, setValue } =
    useFormReturns as unknown as UseFormReturn<PhoneFields> // NOTE: 타입을 강제해서 이 이하에서는 type assertion이 필요 없게 합니다
  const {
    data: phoneFirstData,
    mutate: phoneFirstMutate,
    isPending: phoneFirstIsPending,
  } = useMutation({
    mutationFn: async () => {
      const phone_number = watch().phone_number
      return await plainInstance.post<{ detail: string }>(
        "https://fragmnt.pics/api/v1/accounts/verification/send-sms",
        {
          phone_number,
        }
      )
    },
    onSuccess: () => {
      clearErrors("phone_number")
    },
    onError(error: AxiosError<{ error_detail: string }>) {
      setError("phone_number", {
        type: "custom",
        message: error.response?.data.error_detail,
      })
    },
  })

  const {
    data: phoneSecondData,
    mutate: phoneSecondMutate,
    isPending: phoneSecondIsPending,
  } = useMutation({
    mutationFn: async () => {
      const phone_number = watch().phone_number
      const phone_token = watch().phone_token
      return await plainInstance.post<{
        detail: string
        sms_token: string
      }>("https://fragmnt.pics/api/v1/accounts/verification/verify-sms", {
        phone_number,
        code: phone_token,
      })
    },
    onSuccess: (response) => {
      clearErrors("phone_token")
      setValue("sms_uuid_token", response.data.sms_token)
    },
    onError(error: AxiosError<{ detail: string }>) {
      setError("phone_token", {
        type: "custom",
        message: error.response?.data.detail,
      })
    },
  })

  return {
    phoneFirstData,
    phoneFirstMutate,
    phoneFirstIsPending,
    phoneSecondData,
    phoneSecondMutate,
    phoneSecondIsPending,
  }
}

export default usePhoneVerification
