import { plainInstance } from "@/shared/api/axios-instance"
import { useMutation } from "@tanstack/react-query"
import type { AxiosError } from "axios"
import type { Path, UseFormReturn } from "react-hook-form"
import type { EmailFields } from "../../types/use-form-return.type"

const useEmailVerification = <TFieldValues extends EmailFields>(
  useFormReturns: UseFormReturn<TFieldValues>
) => {
  const { watch, setError, clearErrors } = useFormReturns

  const {
    data: emailFirstData,
    mutate: emailFirstMutate,
    isPending: emailFirstIsPending,
  } = useMutation({
    mutationFn: async () => {
      const email = watch().email
      return await plainInstance.post(
        "https://fragmnt.pics/api/v1/accounts/verification/send-email",
        {
          email,
        }
      )
    },
    onSuccess: () => {
      clearErrors("email" as Path<TFieldValues>)
    },
    onError: (error: AxiosError<{ error_detail: string }>) => {
      setError("email" as Path<TFieldValues>, {
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
      return await plainInstance.post(
        "https://fragmnt.pics/api/v1/accounts/verification/verify-email",
        {
          email,
          code: email_token,
        }
      )
    },
    onSuccess: () => {
      clearErrors("email_token" as Path<TFieldValues>)
    },
    onError(error: AxiosError<{ detail: string }>) {
      setError("email_token" as Path<TFieldValues>, {
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
