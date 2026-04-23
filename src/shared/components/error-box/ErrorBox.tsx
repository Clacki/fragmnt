import { Button, RoundBox, Vstack } from "@/shared/components"

type ErrorBoxProps<T extends () => void> = {
  refetch: T
}
const ErrorBox = <T extends () => void>({ refetch }: ErrorBoxProps<T>) => {
  return (
    <RoundBox className="bg-gray-5 shadow-box" padding="xl">
      <Vstack className="items-center">
        <Vstack gap="sm" className="items-center">
          <h3 className="font-bold text-text-description">
            알 수 없는 오류가 발생했습니다
          </h3>
          <p className="text-sm leading-6 text-text-description">
            잠시 후 다시 시도해주세요
          </p>
        </Vstack>

        <Button onClick={refetch}>재시도</Button>
      </Vstack>
    </RoundBox>
  )
}

export default ErrorBox
