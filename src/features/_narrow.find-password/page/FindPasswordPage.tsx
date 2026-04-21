import NarrowTitleSection from "@/features/_narrow/components/narrow-title-section/NarrowTitleSection"
import { plainInstance } from "@/shared/api/axios-instance"
import { Button, Input, Vstack } from "@/shared/components"
import Labeled from "@/shared/components/inputs/labeled/Labeled"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import z from "zod"
import FindPasswordSuccess from "./find-password-success/FindPasswordSuccess"

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
const FindPasswordPage = () => {
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

  // TODO: api 나오면 응답 타입 확인해야
  if (data) return <FindPasswordSuccess />

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Vstack gap="xl">
        <NarrowTitleSection title="비밀번호 재설정" />

        <Labeled isError={Boolean(errors.new_password)}>
          <Labeled.Title>새 비밀번호</Labeled.Title>
          <Input
            {...register("new_password")}
            type="password"
            status={errors.new_password ? "error" : "none"}
            placeholder="새 비밀번호를 입력해주세요"
          />
          <Labeled.Message>{errors.new_password?.message}</Labeled.Message>
        </Labeled>

        <Labeled isError={Boolean(errors.new_password_confirm)}>
          <Labeled.Title>새 비밀번호 확인</Labeled.Title>
          <Input
            {...register("new_password_confirm")}
            type="password"
            status={errors.new_password_confirm ? "error" : "none"}
            placeholder="새 비밀번호를 다시 입력해주세요"
          />
          <Labeled.Message>
            {errors.new_password_confirm?.message}
          </Labeled.Message>
        </Labeled>

        <Button className="mt-lg">비밀번호 재설정</Button>
      </Vstack>
    </form>
  )
}

export default FindPasswordPage
