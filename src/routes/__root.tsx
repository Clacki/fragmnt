import RootLayout from "@/features/__root/layout/RootLayout"
import DefaultErrorPage from "@/features/default-error-page/page/DefaultErrorPage"
import { NotFoundPage } from "@/features/not-found-page"
import type { RouterContext } from "@/main"
import { createRootRouteWithContext } from "@tanstack/react-router"

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootLayout,
  notFoundComponent: NotFoundPage,
  errorComponent: DefaultErrorPage,
})
