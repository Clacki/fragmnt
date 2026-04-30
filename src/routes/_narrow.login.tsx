import LoginPage from "@/features/_narrow.login/page/LoginPage"
import { createFileRoute } from "@tanstack/react-router"
import z from "zod"

const validateSearch = z.object({
  reason: z.string().optional(),
})

export const Route = createFileRoute("/_narrow/login")({
  validateSearch,
  component: LoginPage,
})
