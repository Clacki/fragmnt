import { resultMock } from "../../../mock/result.mock"
import AICard from "./ai-card/AICard"

const AISection = () => {
  return (
    <section className="w-full pb-md">
      <AICard title="AI 분석 결과" description={resultMock.ai_comment} />
    </section>
  )
}

export default AISection
