import { cn } from "@/lib/utils"
import { Sparkles } from "lucide-react"

type AICardProps = {
  title: string
  description?: string
  className?: string
}

const AICard = ({ title, description, className = "" }: AICardProps) => {
  const hasContent = !!description?.trim()

  return (
    <section
      className={cn(
        "w-full rounded-lg border border-border bg-green-input p-lg shadow-sm text-primary",
        className
      )}
    >
      <div className="flex flex-col gap-sm text-primary">
        <div className="flex items-center gap-sm">
          <Sparkles size={24} />
          <h2 className="text-lg font-bold text-primary pt-xs">{title}</h2>
        </div>

        <p
          className={cn(
            "break-keep text-primary text-md leading-relaxed ml-8 font-semibold",
            hasContent ? "text-primary" : "text-text-sub"
          )}
        >
          {hasContent ? description : "아직 AI 분석 결과가 생성되지 않았어요."}
        </p>
      </div>
    </section>
  )
}

export default AICard
