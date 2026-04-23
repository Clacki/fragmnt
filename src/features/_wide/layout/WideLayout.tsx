import {
  Container,
  FlexOneContainer,
  FullScreen,
  Vstack,
} from "@/shared/components"
import { Outlet } from "@tanstack/react-router"
import type { ReactNode } from "react"
import Footer from "./footer/Footer"
import Header from "./header/Header"
import NavigationBar from "./navigation-bar/NavigationBar"

type ContainerForScrollbarGutterProps = {
  children: ReactNode
}
const ContainerForScrollbarGutter = ({
  children,
}: ContainerForScrollbarGutterProps) => {
  // NOTE: scrollbar 유무에 따른 header와 본문의 중앙 위치 어긋남을 방지합니다
  return (
    <div className="shrink-0 overflow-y-auto [scrollbar-gutter:stable]">
      <Container>{children}</Container>
    </div>
  )
}

const WideLayout = () => {
  return (
    <FullScreen>
      <Vstack gap="none" className="h-screen overflow-hidden">
        <ContainerForScrollbarGutter>
          <Header />
        </ContainerForScrollbarGutter>

        <FlexOneContainer isYScrollable>
          <Container className="h-full">
            <Vstack
              gap="none"
              className="min-h-full justify-between bg-surface-default"
            >
              <Outlet />
              <Footer />
            </Vstack>
          </Container>
        </FlexOneContainer>

        <ContainerForScrollbarGutter>
          <NavigationBar />
        </ContainerForScrollbarGutter>
      </Vstack>
    </FullScreen>
  )
}

export default WideLayout
