import { NotFoundPage } from "@/features/not-found-page"
import RootLayout from "@/features/root/layout/RootLayout"
import { createRootRoute } from "@tanstack/react-router"

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFoundPage,
})
