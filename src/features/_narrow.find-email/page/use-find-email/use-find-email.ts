import { plainInstance } from "@/shared/api/axios-instance"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
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
    path: ["email_token"],
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
    setValue,
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(findEmailSchema) })

  const onSubmit = (data: FindEmailSchema) => {
    mutate(data)
  }

  const submitForm = handleSubmit(onSubmit)

  const handlePhoneVerificationFirst = async () => {
    const phone_number = watch().phone_number
    await plainInstance.post(
      "https://fragmnt.pics/api/v1/accounts/verification/send-sms",
      {
        phone_number,
      }
    )
  }

  const handlePhoneVerificationSecond = async () => {
    const phone_number = watch().phone_number
    const phone_token = watch().phone_token
    const response = await plainInstance.post<{
      detail: string
      sms_token: string
    }>("https://fragmnt.pics/api/v1/accounts/verification/verify-sms", {
      phone_number,
      code: phone_token,
    })
    const token = response.data.sms_token
    setValue("sms_uuid_token", token)
  }

  return {
    data,
    register,
    errors,
    submitForm,
    handlePhoneVerificationFirst,
    handlePhoneVerificationSecond,
  }
}

export default useFindEmail
