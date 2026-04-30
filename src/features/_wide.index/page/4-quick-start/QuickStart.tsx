import useAuthStore from "@/shared/api/use-auth-store"
import { Button, RoundBox, Vstack } from "@/shared/components"
import HOrVStack from "@/shared/components/layouts/HOrVStack/HOrVStack"
import { useNavigate } from "@tanstack/react-router"
import {
  ChevronRight,
  Lightbulb,
  Sparkles,
  Upload,
  type LucideIcon,
} from "lucide-react"
import { handleScroll } from "../../utils/handle-scroll/handle-scroll"
import SectionVstack from "../section-container/SectionContainer"
import TitleSection from "../title-section/TitleSection"

type QuickStartCardProps = {
  Icon: LucideIcon
  step: number
  title: string
  content: string
}
const QuickStartCard = ({
  Icon,
  step,
  title,
  content,
}: QuickStartCardProps) => {
  // NOTE: currently just placeholder
  return (
    <RoundBox
      padding="xl"
      radius="lg"
      className="bg-card w-full shadow-box"
      id="main-quick-start"
    >
      <Vstack className="items-center">
        <RoundBox className="bg-gray-10">
          <Icon size={36} className="text-button" />
        </RoundBox>
        <p className="text-text-sub">step {step}</p>
        <h3 className="text-lg font-bold">{title}</h3>
        <p>{content}</p>
      </Vstack>
    </RoundBox>
  )
}

const QuickStart = () => {
  const accessToken = useAuthStore((state) => state.accessToken)
  const navigate = useNavigate()
  const handleStartClick = () => {
    if (!accessToken) {
      navigate({ to: "/login" })
      return
    }
    navigate({ to: "/find-scent" })
  }

  return (
    <SectionVstack className="items-center">
      <TitleSection
        smallTitle="간편한 시작"
        bigTitle="fragmnt 이렇게 사용해보세요"
        subtitle="세 번의 과정으로 당신의 공간에 딱 맞는 향기를 찾아보세요."
      />

      <HOrVStack gap="xl" className="w-full shadow-card">
        <QuickStartCard
          Icon={Upload}
          step={1}
          title="공간 업로드"
          content="방 사진을 찍거나 원하는 무드를 들려주세요"
        />
        <QuickStartCard
          Icon={Lightbulb}
          step={2}
          title="분석 및 학습"
          content="AI가 공간의 분위기와 당신의 취향 조각을 분석합니다"
        />
        <QuickStartCard
          Icon={Sparkles}
          step={3}
          title="맞춤 매칭"
          content="오직 당신만을 위해 큐레이션 된 향기를 만나보세요"
        />
      </HOrVStack>

      <div className="grid grid-cols-2">
        <Button
          style="outlined"
          onClick={handleStartClick}
          className="justify-self-end"
        >
          Start now
        </Button>
        <Button
          style="ghost"
          onClick={() => handleScroll("#main-faq")}
          className="justify-self-start"
        >
          Learn more
          <ChevronRight />
        </Button>
      </div>
    </SectionVstack>
  )
}

export default QuickStart
