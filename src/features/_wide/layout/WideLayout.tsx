import {
  Container,
  FlexOneContainer,
  FullScreen,
  Vstack,
} from "@/shared/components"
import { Outlet } from "@tanstack/react-router"
import Footer from "./footer/Footer"
import Header from "./header/Header"
import NavigationBar from "./navigation-bar/NavigationBar"

const WideLayout = () => {
  return (
    <FullScreen className="overflow-hidden">
      <Container className="overflow-hidden h-full bg-surface-default">
        <Vstack gap="none" className="overflow-hidden h-full">
          <Header />
          <FlexOneContainer isYScrollable>
            <Vstack gap="none" className="h-full justify-between">
              <Outlet />
              <Footer />
            </Vstack>
          </FlexOneContainer>
          <NavigationBar />
        </Vstack>
      </Container>
    </FullScreen>
  )
}

export default WideLayout
