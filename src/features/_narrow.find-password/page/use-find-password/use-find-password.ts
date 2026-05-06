import { plainInstance } from "@/shared/api/axios-instance"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import type { AxiosError } from "axios"
import { useForm } from "react-hook-form"
import z from "zod"

const findPasswordSchema = z
  .object({
    email: z
      .string()
      .min(1, "이메일을 입력해주세요")
      .email("올바른 이메일 형식으로 입력해주세요"),
    email_token: z
      .string()
      .min(6, "6자리의 인증번호를 입력해주세요")
      .max(6, "6자리의 인증번호를 입력해주세요"),
    new_password: z
      .string()
      .min(1, "새 비밀번호를 입력하세요")
      .regex(
        /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
        "영문과 숫자를 포함해 8자리 이상을 입력해주세요"
      ),
    new_password_confirm: z.string().min(1, "새 비밀번호를 다시 입력하세요"),
    email_uuid_token: z.string().optional(),
  })
  .refine((data) => data.new_password === data.new_password_confirm, {
    message: "비밀번호가 일치하지 않습니다",
    path: ["new_password_confirm"],
  })
  .refine((data) => data.email_uuid_token, {
    message: "확인 버튼을 눌러 이메일 인증코드를 확인해주세요",
    path: ["email_token"],
  })

type FindPasswordSchema = z.input<typeof findPasswordSchema>

const useFindPassword = () => {
  const {
    data,
    mutate,
    error: mutationError,
    reset,
  } = useMutation<unknown, AxiosError<{ code: string }>, FindPasswordSchema>({
    mutationFn: (body) =>
      // NOTE: api가 아직 나오지 않음
      // NOTE: 현재는 404가 뜹니다
      plainInstance.post("/accounts/change-password", body),
    onError: () => {
      setValue("email_token", "")
      setValue("email_uuid_token", undefined)
    },
  })

  const useFormReturn = useForm({ resolver: zodResolver(findPasswordSchema) })
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useFormReturn

  const onSubmit = (data: FindPasswordSchema) => {
    mutate(data)
  }

  const submitForm = handleSubmit(onSubmit)

  return {
    data,
    register,
    submitForm,
    errors,
    useFormReturn,
    mutationError,
    reset,
  }
}

export default useFindPassword
