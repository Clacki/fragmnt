import { plainInstance } from "@/shared/api/axios-instance"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import type { AxiosError } from "axios"
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
  email_uuid_token: z.string().optional(),
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
  sms_uuid_token: z.string().optional(),
  birthday: z
    .string()
    .min(8, "8자리의 생년월일을 입력해주세요")
    .max(8, "8자리의 생년월일을 입력해주세요"),
})

export type SignupSchema = z.input<typeof signupSchema>

const useSignup = () => {
  const setModalKey = useSignupStore((state) => state.setModalKey)
  const setSignupError = useSignupStore((state) => state.setSignupError)
  const { mutate } = useMutation({
    mutationFn: (body: SignupSchema) =>
      plainInstance.post("accounts/signup", body),
    onSuccess: () => setModalKey("success"),
    onError: () => setModalKey("error"),
    onSettled: (_data, error: AxiosError | null) => {
      setSignupError(error)
    },
  })

  const useFormReturns = useForm({ resolver: zodResolver(signupSchema) })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormReturns

  const onSubmit = (data: SignupSchema) => {
    console.log({ data })
    // mutate(data) // TODO: 회원가입 API에서 gender가 빠지면 이걸 사용합니다

    // TODO: 회원가입 api 에서 gender가 빠지면 아래를 삭제합니다
    const body = { ...data, gender: "M" }
    mutate(body)
  }

  const submitForm = handleSubmit(onSubmit)

  return {
    register,
    submitForm,
    errors,
    useFormReturns,
  }
}

export default useSignup
