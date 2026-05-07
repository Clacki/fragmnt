import RootLayout from "@/features/__root/layout/RootLayout"
import DefaultErrorPage from "@/features/default-error-page/page/DefaultErrorPage"
import { NotFoundPage } from "@/features/not-found-page"
import type { RouterContext } from "@/main"
import { createRootRouteWithContext } from "@tanstack/react-router"
import z from "zod"

const validateSearch = z.object({
  access_token: z.string().optional(),
})

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootLayout,
  notFoundComponent: NotFoundPage,
  errorComponent: DefaultErrorPage,
  validateSearch,
})
