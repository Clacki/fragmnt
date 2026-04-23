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
        "w-full rounded-lg border border-border bg-white p-lg shadow-sm",
        className
      )}
    >
      <div className="flex flex-col gap-sm">
        <div className="flex items-center gap-md">
          <Sparkles size={18} />
          <h2 className="text-md font-bold text-text-primary">{title}</h2>
        </div>

        <p
          className={cn(
            "break-keep text-md leading-relaxed ml-xl",
            hasContent ? "text-text-primary" : "text-text-sub"
          )}
        >
          {hasContent ? description : "아직 AI 분석 결과가 생성되지 않았어요."}
        </p>
      </div>
    </section>
  )
}

export default AICard
