import { cn } from "@/lib/utils"
import { Sparkles } from "lucide-react"

const AIEmptyCard = () => {
  return (
    <section
      className={cn(
        "w-full rounded-lg border border-border bg-green-input p-lg text-primary shadow-sm"
      )}
    >
      <div className="flex flex-col gap-sm text-primary">
        <div className="flex items-center gap-sm">
          <Sparkles size={24} />
          <h2 className="pt-xs text-lg font-bold text-primary">AI 분석 정보</h2>
        </div>

        <p className="ml-8 break-keep text-md font-semibold leading-relaxed text-primary">
          서버 상태로 인해 AI 분석 데이터가 누락된 결과입니다.
        </p>
      </div>
    </section>
  )
}

export default AIEmptyCard
