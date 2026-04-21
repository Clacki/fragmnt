import type { ReviewInMainDummy } from "@/features/_wide.index/types/dummy.api.type"
import { Hstack, RoundBox, Vstack } from "@/shared/components"

type ReviewCardInMainProps = {
  reviewInMain: ReviewInMainDummy
  index: number
}
const ReviewCardInMain = ({ reviewInMain, index }: ReviewCardInMainProps) => {
  const { created_at, user_name, thumbnail_url, review } = reviewInMain
  return (
    <RoundBox
      style={{
        transform: `translateX(calc((-100% - 16px) * ${index}))`,
        transition: "transform 300ms ease",
      }}
      padding="none"
      className="w-60 h-90 shrink-0 overflow-hidden shadow-box bg-card"
    >
      <Vstack gap="none" className="h-full">
        <img
          src={thumbnail_url}
          className="aspect-square object-cover w-full"
        />

        <Vstack className="justify-between p-lg flex-1">
          <p className="font-thin">{`"${review}"`}</p>
          <Hstack className="w-full justify-start items-center">
            <p className="grow">{user_name}</p>
            <p className="text-sm text-text-sub">{created_at.slice(0, 10)}</p>
          </Hstack>
        </Vstack>
      </Vstack>
    </RoundBox>
  )
}

export default ReviewCardInMain
