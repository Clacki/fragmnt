import { plainInstance } from "@/shared/api/axios-instance"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useForm } from "react-hook-form"
import z from "zod"

const signupSchema = z.object({
  email: z
    .string()
    .min(1, "이메일을 입력해주세요")
    .email("올바른 이메일 형식으로 입력해주세요"),
  emailVerification: z
    .string()
    .min(6, "6자리의 인증번호를 입력해주세요")
    .max(6, "6자리의 인증번호를 입력해주세요"),
  password: z
    .string()
    .min(1, "비밀번호를 입력해주세요")
    .regex(
      /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
      "영문과 숫자를 포함해 8자리 이상을 입력해주세요"
    ),
  name: z.string().min(1, "이름을 입력해주세요"),
  phone: z.string().min(1, "전화번호를 입력해주세요"),
  phoneVerification: z
    .string()
    .min(6, "6자리의 인증번호를 입력해주세요")
    .max(6, "6자리의 인증번호를 입력해주세요"),
  birthYmd: z
    .string()
    .min(8, "8자리의 생년월일을 입력해주세요")
    .max(8, "8자리의 생년월일을 입력해주세요"),
})

type SignupSchema = z.input<typeof signupSchema>

const useSignup = () => {
  const { mutate } = useMutation({
    mutationFn: (body: SignupSchema) =>
      plainInstance.post("accounts/signup", body),
  })
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signupSchema) })

  const onSubmit = (data: SignupSchema) => {
    mutate(data)
  }

  const submitForm = handleSubmit(onSubmit)

  // TODO: verification 로직 추후 작성되면 한 번 더 정리해야
  const handleEmailVerification = async () => {
    const email = watch().email
    const response = await axios.post(
      "https://fragmnt.pics/api/v1/accounts/verification/send-email",
      {
        email,
      }
    )
    console.log({ response })
  }

  return { register, submitForm, errors, handleEmailVerification }
}

export default useSignup
