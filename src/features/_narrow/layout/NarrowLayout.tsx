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
      <FlexOneContainer isYScrollable className="max-h-screen py-2xl">
        <Container width="md">
          <RoundBox className="bg-card shadow-box" padding="2xl">
            <Outlet />
          </RoundBox>
        </Container>
      </FlexOneContainer>
    </FullScreen>
  )
}

export default NarrowLayout
