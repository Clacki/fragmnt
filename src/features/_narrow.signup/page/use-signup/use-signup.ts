import { plainInstance } from "@/shared/api/axios-instance"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import z from "zod"
import useSignupStore from "../../store/use-signup-store"

const signupSchema = z.object({
  email: z
    .string()
    .min(1, "이메일을 입력해주세요")
    .email("올바른 이메일 형식으로 입력해주세요"),
  email_token: z
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
  phone_number: z.string().min(1, "전화번호를 입력해주세요"),
  phone_token: z
    .string()
    .min(6, "6자리의 인증번호를 입력해주세요")
    .max(6, "6자리의 인증번호를 입력해주세요"),
  birthday: z
    .string()
    .min(8, "8자리의 생년월일을 입력해주세요")
    .max(8, "8자리의 생년월일을 입력해주세요"),
})

type SignupSchema = z.input<typeof signupSchema>

const useSignup = () => {
  const setModalKey = useSignupStore((state) => state.setModalKey)
  const { mutate } = useMutation({
    mutationFn: (body: SignupSchema) =>
      plainInstance.post("accounts/signup", body),
    onSuccess: () => setModalKey("success"),
    onError: () => setModalKey("error"),
  })

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signupSchema) })

  const onSubmit = (data: SignupSchema) => {
    console.log({ data })
    // mutate(data) // TODO: 회원가입 API에서 gender가 빠지면 이걸 사용합니다

    // TODO: 회원가입 api 에서 gender가 빠지면 아래를 삭제합니다
    const body = { ...data, gender: "M" }
    mutate(body)
  }

  const submitForm = handleSubmit(onSubmit)

  const handleEmailVerificationFirst = async () => {
    const email = watch().email
    await plainInstance.post(
      "https://fragmnt.pics/api/v1/accounts/verification/send-email",
      {
        email,
      }
    )
  }
  const handleEmailVerificationSecond = async () => {
    const email = watch().email
    const email_token = watch().email_token
    await plainInstance.post(
      "https://fragmnt.pics/api/v1/accounts/verification/verify-email",
      {
        email,
        code: email_token,
      }
    )
  }

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
    await plainInstance.post(
      "https://fragmnt.pics/api/v1/accounts/verification/verify-sms",
      {
        phone_number,
        code: phone_token,
      }
    )
  }

  return {
    register,
    submitForm,
    errors,
    handleEmailVerificationFirst,
    handleEmailVerificationSecond,
    handlePhoneVerificationFirst,
    handlePhoneVerificationSecond,
  }
}

export default useSignup
