import EmptyScentImage from "@/assets/images/empty-state/empty-scent.svg"
import {
  BackButton,
  CenterContainer,
  Container,
  EmptyState,
  LoadingState,
  Vstack,
} from "@/shared/components"

import { useNavigate, useSearch } from "@tanstack/react-router"
import { useDetailQuery } from "./hooks/useDetailQuery"

import BottomCard from "./page/sections/bottom-section/BottomCard"
import NoteCard from "./page/sections/note-section/NoteCard"
import ProfileCard from "./page/sections/profile-section/ProfileCard"
import TopCard from "./page/sections/top-section/TopCard"

export const ScentDetail = () => {
  const { id } = useSearch({ from: "/_wide/scent-detail" })
  const scentId = Number(id)

  const navigate = useNavigate()
  const { data, isLoading, error } = useDetailQuery(scentId)

  const scent = data?.data
  const isInvalid = !Number.isFinite(scentId) || error || !scent

  console.log(data)

  return (
    <CenterContainer className="w-full">
      <Container
        width="xl"
        isPadded
        className="min-h-screen max-w-container-xl bg-surface-default"
      >
        <Vstack className="mx-2xl">
          <BackButton onClick={() => navigate({ to: "/scent-list" })} />

          {isLoading ? (
            <LoadingState />
          ) : isInvalid ? (
            <EmptyState
              imageSrc={EmptyScentImage}
              title="존재하지 않는 향기입니다."
              description="잠시 후 다시 시도해주세요!"
              className="border-none"
            />
          ) : (
            <>
              <TopCard data={data} />

              <ProfileCard
                intensity={scent.intensity}
                profile={scent.profile}
              />

              <NoteCard
                notes={scent.scent_notes}
                tags={scent.tags}
                seasons={scent.season}
              />

              <BottomCard
                recommendedPlaces={scent.recommended_places}
                similarScents={scent.similar_scents}
              />
            </>
          )}
        </Vstack>
      </Container>
    </CenterContainer>
  )
}
