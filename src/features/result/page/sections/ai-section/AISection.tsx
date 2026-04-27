import AICard from "./ai-card/AICard"

type AISectionProps = {
  aiComment?: string
}

const AISection = ({ aiComment }: AISectionProps) => {
  if (!aiComment) {
    return null
  }

  return (
    <section className="w-full pb-md">
      <AICard title="AI 분석 결과" description={aiComment} />
    </section>
  )
}

export default AISection
