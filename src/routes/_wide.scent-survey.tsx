import ScentSurvey from "@/features/scent-survey/page/ScentSurvey"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_wide/scent-survey")({
  component: ScentSurvey,
})
