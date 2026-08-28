import { Review } from "@/features/review/page/Review"
import { createFileRoute } from "@tanstack/react-router"
import { z } from "zod"

const validateSearch = z.object({
  resultId: z.preprocess((value) => {
    const resultId = Number(value)

    return Number.isInteger(resultId) && resultId > 0 ? resultId : undefined
  }, z.number().int().positive().optional()),
  type: z.enum(["image", "chatbot", "keyword", "survey"]).optional(),
  name: z.string().optional(),
  engName: z.string().optional(),
  thumbnailUrl: z.string().optional(),
})

export const Route = createFileRoute("/_wide/review")({
  component: Review,
  validateSearch,
})
