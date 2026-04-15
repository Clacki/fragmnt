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
    <FullScreen>
      <Container>
        <Vstack gap="none">
          <Header />
          <FlexOneContainer isYScrollable>
            <Vstack gap="none">
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
