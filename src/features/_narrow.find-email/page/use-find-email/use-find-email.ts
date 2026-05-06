import { plainInstance } from "@/shared/api/axios-instance"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import type { AxiosError, AxiosResponse } from "axios"
import { useForm } from "react-hook-form"
import z from "zod"

const findEmailSchema = z
  .object({
    name: z.string().min(1, "이름을 입력해주세요"),
    phone_number: z.string().min(1, "전화번호를 입력해주세요"),
    phone_token: z
      .string()
      .min(6, "6자리의 인증번호를 입력해주세요")
      .max(6, "6자리의 인증번호를 입력해주세요"),
    sms_uuid_token: z.string().optional(),
  })
  .refine((data) => data.sms_uuid_token, {
    message: "확인 버튼을 눌러 전화번호 인증코드를 확인해주세요",
    path: ["phone_token"],
  })

type FindEmailSchema = z.input<typeof findEmailSchema>

const useFindEmail = () => {
  const {
    data,
    mutate,
    error: mutationError,
    reset,
  } = useMutation<
    AxiosResponse<{ email: string }>,
    AxiosError<{ code: string }>,
    FindEmailSchema
  >({
    mutationFn: (body) =>
      // NOTE: api가 아직 나오지 않음
      // NOTE: 현재는 404가 뜹니다
      plainInstance.post("/accounts/find-email", body),
    onError: () => {
      setValue("phone_token", "")
      setValue("sms_uuid_token", undefined)
    },
  })

  const useFormReturn = useForm({ resolver: zodResolver(findEmailSchema) })
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useFormReturn

  const onSubmit = (data: FindEmailSchema) => {
    mutate(data)
  }

  const submitForm = handleSubmit(onSubmit)

  return {
    data,
    register,
    errors,
    submitForm,
    useFormReturn,
    mutationError,
    reset,
  }
}

export default useFindEmail
