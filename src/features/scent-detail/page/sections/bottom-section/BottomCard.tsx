import { ArchiveCard } from "@/shared/components"
import type { ScentDetail } from "@/shared/types/scent-types/scent.type"
import { useNavigate } from "@tanstack/react-router"

import PlaceCard from "./place-card/PlaceCard"

type BottomCardProps = {
  recommendedPlaces: ScentDetail["recommended_places"]
  similarScents: ScentDetail["similar_scents"]
}

const BottomCard = ({
  recommendedPlaces = [],
  similarScents = [],
}: BottomCardProps) => {
  const navigate = useNavigate()

  return (
    <div className="mt-2xl flex flex-col items-center justify-center gap-2xl">
      {/* 1. Recommend Place */}
      <div className="flex flex-col items-center justify-center">
        <div className="text-md font-light">SPACE MATCH</div>
        <div className="text-lg font-bold">Recommended Places</div>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
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

      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
        {similarScents.map((scent) => (
          <ArchiveCard
            key={scent.id}
            title={scent.name}
            imageAlt={scent.name}
            imageSrc={scent.thumbnail_url}
            tags={scent.tags}
            description={scent.description}
            onClick={() => {
              navigate({
                to: "/scent-detail",
                search: {
                  id: scent.id,
                },
              })
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default BottomCard
