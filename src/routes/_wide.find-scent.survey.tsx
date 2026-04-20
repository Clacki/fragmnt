import ScentSurvey from "@/features/find-scent/survey/page/ScentSurvey"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_wide/find-scent/survey")({
  component: ScentSurvey,
})
