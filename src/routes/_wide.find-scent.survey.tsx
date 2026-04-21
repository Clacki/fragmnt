import ScentSurvey from "@/features/survey/page/ScentSurvey"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_wide/find-scent/survey")({
  component: ScentSurvey,
})
