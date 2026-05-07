import {
  Container,
  FlexOneContainer,
  FullScreen,
  RoundBox,
} from "@/shared/components"
import { Outlet } from "@tanstack/react-router"

const NarrowLayout = () => {
  return (
    <FullScreen>
      <FlexOneContainer
        isYScrollable
        id="main-scrollable-area"
        className="h-dvh px-4 py-8"
      >
        <div className="flex min-h-full items-start justify-center md:items-center">
          <Container width="lg">
            <RoundBox className="bg-card shadow-box" padding="2xl">
              <Outlet />
            </RoundBox>
          </Container>
        </div>
      </FlexOneContainer>
    </FullScreen>
  )
}

export default NarrowLayout
