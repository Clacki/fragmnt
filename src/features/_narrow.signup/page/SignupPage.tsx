import NarrowTitleSection from "@/features/_narrow/components/narrow-title-section/NarrowTitleSection"
import { Button, Hstack, Input, Vstack } from "@/shared/components"
import Labeled from "@/shared/components/inputs/labeled/Labeled"
import useSignup from "./use-signup/use-signup"

const SignupPage = () => {
  const { errors, register, submitForm, handleEmailVerification } = useSignup()

  return (
    <form onSubmit={submitForm}>
      <Vstack gap="xl">
        <NarrowTitleSection
          title="공간의 완성, 향기의 조각"
          description="fragmnt에서 당신만의 향기 아카이브를 시작하세요"
        />

        <Labeled isError={Boolean(errors.email)}>
          <Labeled.Title>이메일</Labeled.Title>
          <Hstack gap="sm">
            <Input
              {...register("email")}
              placeholder="your@email.com"
              className="grow"
              status={errors.email ? "error" : "none"}
            />
            <Button type="button" onClick={handleEmailVerification}>
              인증
            </Button>
          </Hstack>
          <Labeled.Message>{errors.email?.message}</Labeled.Message>
        </Labeled>

        <Labeled isError={Boolean(errors.emailVerification)}>
          <Labeled.Title>이메일 인증코드</Labeled.Title>
          <Input
            {...register("emailVerification")}
            status={errors.emailVerification ? "error" : "none"}
            placeholder="6자리 코드를 입력해주세요"
          />
          <Labeled.Message>{errors.emailVerification?.message}</Labeled.Message>
        </Labeled>

        <Labeled isError={Boolean(errors.password)}>
          <Labeled.Title>비밀번호</Labeled.Title>
          <Input
            {...register("password")}
            status={errors.password ? "error" : "none"}
            placeholder="영문, 숫자를 포함해 6자리 이상으로 만들어주세요"
          />
          <Labeled.Message>{errors.password?.message}</Labeled.Message>
        </Labeled>

        <Labeled isError={Boolean(errors.name)}>
          <Labeled.Title>이름</Labeled.Title>
          <Input
            {...register("name")}
            status={errors.name ? "error" : "none"}
            placeholder="이름을 입력해주세요"
          />
          <Labeled.Message>{errors.name?.message}</Labeled.Message>
        </Labeled>

        <Labeled isError={Boolean(errors.phone)}>
          <Labeled.Title>전화번호</Labeled.Title>
          <Hstack gap="sm">
            <Input
              {...register("phone")}
              status={errors.phone ? "error" : "none"}
              type="number"
              placeholder={`"-"없이 숫자만 입력해주세요`}
              className="grow"
            />
            <Button type="button">인증</Button>
          </Hstack>
          <Labeled.Message>{errors.phone?.message}</Labeled.Message>
        </Labeled>

        <Labeled isError={Boolean(errors.phoneVerification)}>
          <Labeled.Title>전화번호 인증코드</Labeled.Title>
          <Input
            {...register("phoneVerification")}
            status={errors.phoneVerification ? "error" : "none"}
            placeholder="6자리 코드를 입력해주세요"
          />
          <Labeled.Message>{errors.phoneVerification?.message}</Labeled.Message>
        </Labeled>

        <Labeled isError={Boolean(errors.birthYmd)}>
          <Labeled.Title>생년월일</Labeled.Title>
          <Input
            {...register("birthYmd")}
            type="number"
            status={errors.birthYmd ? "error" : "none"}
            placeholder="8자리 숫자 입력 (예: 19980514)"
          />
          <Labeled.Message>{errors.birthYmd?.message}</Labeled.Message>
        </Labeled>
        <Button className="mt-lg">회원가입</Button>
      </Vstack>
    </form>
  )
}

export default SignupPage
