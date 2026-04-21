import { plainInstance } from "@/shared/api/axios-instance"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import z from "zod"

const findEmailSchema = z.object({
  name: z.string().min(1, "이름을 입력해주세요"),
  phone: z.string().min(1, "전화번호를 입력해주세요"),
  phoneVerification: z
    .string()
    .min(6, "6자리의 인증번호를 입력해주세요")
    .max(6, "6자리의 인증번호를 입력해주세요"),
})

type FindEmailSchema = z.input<typeof findEmailSchema>

const useFindEmail = () => {
  const { data, mutate } = useMutation({
    mutationFn: (body: FindEmailSchema) =>
      // NOTE: api가 아직 나오지 않음
      // NOTE: 현재는 404가 뜹니다
      plainInstance.post("/accounts/find-email", body),
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(findEmailSchema) })

  const onSubmit = (data: FindEmailSchema) => {
    console.log({ data })
    mutate(data)
  }

  const submitForm = handleSubmit(onSubmit)

  return { data, register, errors, submitForm }
}

export default useFindEmail
