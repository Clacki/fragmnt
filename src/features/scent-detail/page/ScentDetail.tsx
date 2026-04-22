import {
  BackButton,
  CenterContainer,
  Container,
  Vstack,
} from "@/shared/components"

import { useSearch } from "@tanstack/react-router"
import { fragranceDetailMock } from "../mocks/fragranceDetail.mock"

import BottomCard from "./sections/bottom-section/BottomCard"
import NoteCard from "./sections/note-section/NoteCard"
import ProfileCard from "./sections/profile-section/ProfileCard"
import TopCard from "./sections/top-section/TopCard"

const ScentDetail = () => {
  const { id } = useSearch({ from: "/_wide/scent-detail" })
  const scent = fragranceDetailMock.scent

  if (scent.id !== id) {
    return <div>해당 향기 정보를 찾을 수 없습니다.</div>
  }

  return (
    <CenterContainer className="w-full">
      <Container
        width="xl"
        isPadded
        className="min-h-screen max-w-container-xl bg-surface-default"
      >
        <Vstack className="mx-2xl">
          <BackButton />
          <TopCard data={fragranceDetailMock} />
          <ProfileCard intensity={scent.intensity} profile={scent.profile} />

          <NoteCard
            notes={scent.scent_notes}
            tags={scent.tags}
            seasons={scent.season}
          />

          <BottomCard
            recommendedPlaces={scent.recommended_places}
            similarScents={scent.similar_scents}
          />
        </Vstack>
      </Container>
    </CenterContainer>
  )
}

export default ScentDetail
