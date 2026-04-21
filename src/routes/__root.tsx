import RootLayout from "@/features/__root/layout/RootLayout"
import { NotFoundPage } from "@/features/not-found-page"
import type { RouterContext } from "@/main"
import { createRootRouteWithContext } from "@tanstack/react-router"

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootLayout,
  notFoundComponent: NotFoundPage,
})
