import { plainInstance } from "@/shared/api/axios-instance"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import z from "zod"

const findPasswordSchema = z
  .object({
    new_password: z
      .string()
      .min(1, "새 비밀번호를 입력하세요")
      .regex(
        /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
        "영문과 숫자를 포함해 8자리 이상을 입력해주세요"
      ),
    new_password_confirm: z.string().min(1, "새 비밀번호를 다시 입력하세요"),
  })
  .refine((data) => data.new_password === data.new_password_confirm, {
    message: "비밀번호가 일치하지 않습니다",
    path: ["new_password_confirm"],
  })

type FindPasswordSchema = z.input<typeof findPasswordSchema>

const useFindPassword = () => {
  const { data, mutate } = useMutation({
    mutationFn: (body: FindPasswordSchema) =>
      // NOTE: api가 아직 나오지 않음
      // NOTE: 현재는 404가 뜹니다
      plainInstance.post("/accounts/find-password", body),
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(findPasswordSchema) })

  const onSubmit = (data: FindPasswordSchema) => {
    console.log({ data })
    mutate(data)
  }

  const submitForm = handleSubmit(onSubmit)

  return { data, register, submitForm, errors }
}

export default useFindPassword
