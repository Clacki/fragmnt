import { plainInstance } from "@/shared/api/axios-instance"
import useAuthStore from "@/shared/api/use-auth-store"
import type { Profile } from "@/shared/types"
// import type { Profile } from "@/shared/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import z from "zod"

const loginSchema = z.object({
  email: z
    .string()
    .min(1, "이메일을 입력해주세요")
    .email("올바른 이메일 형식으로 입력해주세요"),
  password: z.string().min(1, "비밀번호를 입력해주세요"),
})

type LoginSchema = z.input<typeof loginSchema>

type LoginResponse = {
  access: string
}

const login = async (body: LoginSchema) => {
  const loginResponse = await plainInstance.post<LoginResponse>(
    "/accounts/login",
    body
  )
  const { access } = loginResponse.data

  const profileResponse = await plainInstance.get("/accounts/me/profile", {
    headers: { Authorization: `Bearer ${access}` },
    withCredentials: true,
  })
  const profile = profileResponse.data as Profile

  return { access, profile }
}

const useLogin = () => {
  const setAccessToken = useAuthStore((state) => state.setAccessToken)
  const setProfile = useAuthStore((state) => state.setProfile)

  const { mutate } = useMutation({
    mutationFn: (body: LoginSchema) => login(body),
    onSuccess({ access, profile }) {
      setAccessToken(access)
      setProfile(profile)

      // TODO: MUST DELETE BEFORE PUBLISH
      console.log({ access, profile })
    },
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) })

  const onSubmit = (data: LoginSchema) => {
    mutate(data)
  }

  const submitForm = handleSubmit(onSubmit)

  return { register, submitForm, errors }
}

export default useLogin
