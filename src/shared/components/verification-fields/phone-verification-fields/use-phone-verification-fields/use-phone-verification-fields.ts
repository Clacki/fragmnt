import { plainInstance } from "@/shared/api/axios-instance"
import { useMutation } from "@tanstack/react-query"
import type { AxiosError } from "axios"
import type { Path, UseFormReturn } from "react-hook-form"
import type { PhoneFields } from "../../types/use-form-return.type"

const usePhoneVerification = <TFieldValues extends PhoneFields>(
  useFormReturns: UseFormReturn<TFieldValues>
) => {
  const { watch, setError, clearErrors } = useFormReturns
  const {
    data: phoneFirstData,
    mutate: phoneFirstMutate,
    isPending: phoneFirstIsPending,
  } = useMutation({
    mutationFn: async () => {
      const phone_number = watch().phone_number
      return await plainInstance.post(
        "https://fragmnt.pics/api/v1/accounts/verification/send-sms",
        {
          phone_number,
        }
      )
    },
    onSuccess: () => {
      clearErrors("phone_number" as Path<TFieldValues>)
    },
    onError(error: AxiosError<{ error_detail: string }>) {
      setError("phone_number" as Path<TFieldValues>, {
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
      return await plainInstance.post(
        "https://fragmnt.pics/api/v1/accounts/verification/verify-sms",
        {
          phone_number,
          code: phone_token,
        }
      )
    },
    onSuccess: () => {
      clearErrors("phone_token" as Path<TFieldValues>)
    },
    onError(error: AxiosError<{ detail: string }>) {
      setError("phone_token" as Path<TFieldValues>, {
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
