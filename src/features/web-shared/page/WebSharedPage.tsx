import { Route } from "@/routes/share.$shareId"
import { Container, LoadingState, Vstack } from "@/shared/components"
import { useGetWebShared } from "../hooks/useGetWebShared"
import SharedError from "./shared-error/SharedError"
import SharedFooter from "./shared-footer/SharedFooter"
import SharedHeader from "./shared-header/SharedHeader"
import SharedScentInfo from "./shared-scent-info/SharedScentInfo"
import SharedScentVisual from "./shared-scent-visual/SharedScentVisual"

const WebSharedPage = () => {
  const { shareId } = Route.useParams()

  const { data, isLoading, isError } = useGetWebShared({
    shareId,
  })

  if (isLoading) {
    return <LoadingState />
  }

  if (isError || !data?.recommended_scent) {
    return <SharedError />
  }

  const scent = data.recommended_scent

  return (
    <main className="min-h-dvh">
      <Container>
        <div className="flex min-h-dvh items-center justify-center px-md py-lg">
          <article className="fade-up w-full max-w-168 rounded-lg border border-border bg-white px-lg py-xl shadow-sm md:px-xl">
            <Vstack>
              <SharedHeader />
              <SharedScentVisual scent={scent} />
              <SharedScentInfo scent={scent} />
              <SharedFooter />
            </Vstack>
          </article>
        </div>
      </Container>
    </main>
  )
}

export default WebSharedPage
