import { ArchiveCard } from "@/shared/components"
import type { ScentDetail } from "@/shared/types/scent-types/scent.type"

import PlaceCard from "./place-card/PlaceCard"

type BottomCardProps = {
  recommendedPlaces: ScentDetail["recommended_places"]
  similarScents: ScentDetail["similar_scents"]
}

const BottomCard = ({ recommendedPlaces, similarScents }: BottomCardProps) => {
  return (
    <div className="mt-2xl flex flex-col items-center justify-center gap-2xl">
      {/* 1. Recommend Place */}
      <div className="flex flex-col items-center justify-center">
        <div className="text-md font-light">SPACE MATCH</div>
        <div className="text-lg font-bold">Recommended Places</div>
      </div>

      <div className="grid w-full grid-cols-2 gap-4">
        {recommendedPlaces.map((place) => (
          <PlaceCard
            key={place.name}
            imageSrc={place.imageUrl}
            title={place.name}
            description={place.description}
            matchRate={place.matchScore}
          />
        ))}
      </div>

      {/* 2. Similar Scents */}
      <div className="mt-2xl flex flex-col items-center justify-center">
        <div className="text-md font-light">EXPLORE MORE</div>
        <div className="text-lg font-bold">Similar Scents</div>
      </div>

      <div className="grid w-full grid-cols-3 gap-4">
        {similarScents.map((scentId) => (
          <ArchiveCard
            key={scentId}
            title={`Scent #${scentId}`}
            imageAlt={`Scent ${scentId}`}
            imageSrc=""
            tags={[]}
            description="유사한 향 정보는 추후 제공될 예정입니다."
          />
        ))}
      </div>
    </div>
  )
}

export default BottomCard
