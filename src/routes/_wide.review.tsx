import { Review } from "@/features/review/page/Review"
import { createFileRoute } from "@tanstack/react-router"
import { z } from "zod"

const validateSearch = z.object({
  resultId: z.union([z.string(), z.number()]).optional(),
  type: z.enum(["image", "chatbot", "keyword", "survey"]),
  name: z.string().optional(),
  engName: z.string().optional(),
  thumbnailUrl: z.string().optional(),
})

export const Route = createFileRoute("/_wide/review")({
  component: Review,
  validateSearch,
})
