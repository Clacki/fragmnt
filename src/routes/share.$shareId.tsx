import WebSharedPage from "@/features/web-shared/page/WebSharedPage"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/share/$shareId")({
  component: WebSharedPage,
})
