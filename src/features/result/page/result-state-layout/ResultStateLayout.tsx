import { CenterContainer, Container } from "@/shared/components"

type ResultStateLayoutProps = {
  children: React.ReactNode
}

const ResultStateLayout = ({ children }: ResultStateLayoutProps) => {
  return (
    <CenterContainer className="w-full py-2xl">
      <Container
        width="xl"
        isPadded
        className="min-h-screen max-w-container-xl bg-surface-default"
      >
        {children}
      </Container>
    </CenterContainer>
  )
}
export default ResultStateLayout
