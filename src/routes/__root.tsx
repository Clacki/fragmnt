import RootLayout from "@/features/__root/layout/RootLayout"
import { NotFoundPage } from "@/features/not-found-page"
import type { RouterContext } from "@/main"
import { createRootRoute } from "@tanstack/react-router"

export const Route = createRootRoute<RouterContext>({
  component: RootLayout,
  notFoundComponent: NotFoundPage,
})
