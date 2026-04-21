import ScentChat from "@/features/chat/page/ScentChat"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_wide/find-scent/chat")({
  component: ScentChat,
})
