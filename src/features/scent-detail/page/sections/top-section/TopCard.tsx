import { Button, EmptyImage, Tag } from "@/shared/components"
import type { ScentDetailResponse } from "@/shared/types/scent-types/scent.type"
import { BookmarkIcon, Share2 } from "lucide-react"

type TopCardProps = {
  data: ScentDetailResponse
}

const TopCard = ({ data }: TopCardProps) => {
  const scent = data.scent

  return (
    <div className="flex flex-col items-center justify-center gap-md">
      <div className="mb-md">
        <Tag label={scent.categories} size="sm" variant="outlined" />
      </div>

      {scent.thumbnail_url ? (
        <img
          src={scent.thumbnail_url}
          alt={scent.eng_name}
          className="mb-md aspect-square w-[220px] rounded-xl object-cover"
        />
      ) : (
        <div className="mb-md flex aspect-square w-[220px] items-center justify-center">
          <EmptyImage type="image" size="md" />
        </div>
      )}

      <div className="text-xl font-bold">{scent.name}</div>
      <div className="text-sm text-text-sub">{scent.eng_name}</div>

      <div className="mt-md text-center text-text-primary">
        {scent.description}
      </div>

      <div className="m-md flex flex-wrap justify-center gap-md">
        {scent.tags.map((tag) => (
          <Tag key={tag} label={tag} size="sm" variant="soft" />
        ))}
      </div>

      <div className="mt-md flex items-center justify-center gap-lg">
        <Button size="lg" radius="full">
          <BookmarkIcon size={18} />내 향기로 저장
        </Button>

        <Button size="lg" radius="full" style="outlined">
          <Share2 size={18} />
          공유하기
        </Button>
      </div>
    </div>
  )
}

export default TopCard
