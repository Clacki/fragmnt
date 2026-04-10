import NotWorkingCssPage from "@/features/test.not-working-css/page/NotWorkingCssPage"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/test/not-working-css")({
  component: NotWorkingCssPage,
})
