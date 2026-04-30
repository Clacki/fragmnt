import { plainInstance } from "@/shared/api/axios-instance"
import { useMutation } from "@tanstack/react-query"
import type { AxiosError } from "axios"
import type { UseFormReturn } from "react-hook-form"
import type { EmailFields } from "../../types/use-form-return.type"

const useEmailVerification = <TFieldValues extends EmailFields>(
  useFormReturns: UseFormReturn<TFieldValues>
) => {
  const { watch, setError, clearErrors, setValue } =
    useFormReturns as unknown as UseFormReturn<EmailFields> // NOTE: 타입을 강제해서 이 이하에서는 type assertion이 필요 없게 합니다

  const {
    data: emailFirstData,
    mutate: emailFirstMutate,
    isPending: emailFirstIsPending,
  } = useMutation({
    mutationFn: async () => {
      const email = watch().email
      return await plainInstance.post<{ detail: string }>(
        "https://fragmnt.pics/api/v1/accounts/verification/send-email",
        {
          email,
        }
      )
    },
    onSuccess: () => {
      clearErrors("email")
      setValue("email_token", undefined)
    },
    onError: (error: AxiosError<{ error_detail: string }>) => {
      setError("email", {
        type: "custom",
        message: error.response?.data.error_detail,
      })
    },
  })

  const {
    data: emailSecondData,
    mutate: emailSecondMutate,
    isPending: emailSecondIsPending,
  } = useMutation({
    mutationFn: async () => {
      const email = watch().email
      const email_token = watch().email_token
      return await plainInstance.post<{
        detail: string
        token: string
      }>("https://fragmnt.pics/api/v1/accounts/verification/verify-email", {
        email,
        code: email_token,
      })
    },
    onSuccess: (response) => {
      clearErrors("email_token")
      setValue("email_uuid_token", response.data.token)
    },
    onError(error: AxiosError<{ detail: string }>) {
      setError("email_token", {
        type: "custom",
        message: error.response?.data.detail,
      })
    },
  })

  return {
    emailFirstData,
    emailFirstMutate,
    emailFirstIsPending,
    emailSecondData,
    emailSecondMutate,
    emailSecondIsPending,
  }
}

export default useEmailVerification
