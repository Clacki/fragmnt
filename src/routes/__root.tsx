import RootLayout from "@/features/__root/layout/RootLayout"
import { NotFoundPage } from "@/features/not-found-page"
import { createRootRoute } from "@tanstack/react-router"

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFoundPage,
})
