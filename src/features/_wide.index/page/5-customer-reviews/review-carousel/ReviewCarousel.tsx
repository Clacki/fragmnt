import { Button, Hstack, RoundBox } from "@/shared/components"
import type { WithButtonProps } from "@/shared/components/inputs/Button/Button"
import type { DefaultButtonProps, DivProps } from "@/shared/types"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const RoundButton = (props: DefaultButtonProps & WithButtonProps) => {
  return <Button padding="same" radius="full" style="ghost" {...props} />
}

const ReviewCard = (props: DivProps) => {
  // NOTE: 현재 전체 리뷰 목록 관련 API를 못 찾겠습니다
  // TODO: 월요일에 백엔드에 문의하겠습니다
  return (
    <RoundBox
      {...props}
      padding="none"
      className="w-60 h-90 shrink-0 bg-amber-100"
    >
      review card placeholder
    </RoundBox>
  )
}

const ReviewCarousel = () => {
  const [index, setIndex] = useState(0)
  const TEMP_DATA_LENGTH = 10
  // TODO: API 받으면 data.length로 수정
  return (
    <div className="relative">
      {TEMP_DATA_LENGTH > 2 && (
        <Hstack gap="sm" className="absolute bottom-full right-0">
          <RoundButton
            onClick={() => setIndex((prev) => Math.max(0, prev - 1))}
          >
            <ChevronLeft />
          </RoundButton>
          <RoundButton
            onClick={() =>
              setIndex((prev) => Math.min(TEMP_DATA_LENGTH - 2, prev + 1))
            }
          >
            <ChevronRight />
          </RoundButton>
        </Hstack>
      )}

      <Hstack className="justify-start overflow-hidden">
        {Array(TEMP_DATA_LENGTH)
          .fill(0)
          .map((_, ACTUAL_KEY_MUST_BE_USED) => (
            <ReviewCard
              key={ACTUAL_KEY_MUST_BE_USED}
              style={{
                transform: `translateX(calc((-100% - 16px) * ${index}))`,
                transition: "transform 300ms ease",
              }}
            />
          ))}
      </Hstack>
    </div>
  )
}

export default ReviewCarousel
