import Find1ImageSrc from "@/assets/images/main/find1.png"
import Find2ImageSrc from "@/assets/images/main/find2.png"
import Find3ImageSrc from "@/assets/images/main/find3.png"
import useAuthStore from "@/shared/api/use-auth-store"
import HOrVStack from "@/shared/components/layouts/HOrVStack/HOrVStack"
import { useNavigate, type LinkProps } from "@tanstack/react-router"
import SectionVstack from "../section-container/SectionContainer"
import TitleSection from "../title-section/TitleSection"
import CardWithImage from "./card-with-image/CardWithImage"

type NavigationPathname = LinkProps["to"]
const FindYourScent = () => {
  // TODO: 뷰포트 좁아지면 그리드를 Vstack으로 바꿔야 함
  // TODO: 이 때는 세로로 긴 상자 없이 둘 다 글 왼쪽 그림 오른쪽으로 배치해야
  const accessToken = useAuthStore((state) => state.accessToken)
  const navigate = useNavigate()

  const handleNavigation = (to: NavigationPathname) => {
    if (!accessToken) {
      navigate({ to: "/login" })
      return
    }

    navigate({ to })
  }

  return (
    <SectionVstack>
      <TitleSection
        smallTitle="나만의 향기를 발견하는 세 가지 방법"
        bigTitle="당신만의 향기를 발견해 보세요"
        subtitle="가장 편안한 방식으로 당신의 취향을 찾아보세요."
      />

      <HOrVStack gap="xl">
        <CardWithImage direction="horizontal" className="flex-2">
          <CardWithImage.Content className="flex-1">
            <CardWithImage.Category>Photo</CardWithImage.Category>
            <CardWithImage.Title>공간과 분위기 분석</CardWithImage.Title>
            <CardWithImage.Description className="flex-1">
              방 사진을 업로드해 보세요. AI가 채광, 컬러, 공기감을 읽어 그곳에
              머물러야 할 향기를 제안합니다.
            </CardWithImage.Description>
            <CardWithImage.Button
              onClick={() => handleNavigation("/find-scent/photo")}
            >
              Start
            </CardWithImage.Button>
          </CardWithImage.Content>
          <CardWithImage.Image imgSrc={Find1ImageSrc} className="flex-1" />
        </CardWithImage>

        <CardWithImage direction="vertical" className="flex-1">
          <CardWithImage.Content>
            <CardWithImage.Category>Chat</CardWithImage.Category>
            <CardWithImage.Title>AI와 대화하기</CardWithImage.Title>
            <CardWithImage.Button
              onClick={() => handleNavigation("/find-scent/chat")}
            >
              Start
            </CardWithImage.Button>
            <CardWithImage.Description className="mt-auto">
              지금 느끼는 기분이나 원하는 무드를 들려주세요. AI가 당신의
              이야기를 듣고 가장 잘 어울리는 노트를 찾아냅니다.
            </CardWithImage.Description>
          </CardWithImage.Content>
          <CardWithImage.Image imgSrc={Find2ImageSrc} />
        </CardWithImage>

        <CardWithImage direction="vertical" className="flex-1">
          <CardWithImage.Content>
            <CardWithImage.Category>Quiz</CardWithImage.Category>
            <CardWithImage.Title>취향으로 찾기</CardWithImage.Title>
            <CardWithImage.Button
              onClick={() => handleNavigation("/find-scent/survey")}
            >
              Start
            </CardWithImage.Button>
            <CardWithImage.Description className="mt-auto">
              간단한 설문과 키워드 선택을 통해 당신의 잠재된 취향을 파악합니다.
              당신의 라이프스타일에 꼭 맞는 향기를 매칭해드려요.
            </CardWithImage.Description>
          </CardWithImage.Content>
          <CardWithImage.Image imgSrc={Find3ImageSrc} />
        </CardWithImage>
      </HOrVStack>
    </SectionVstack>
  )
}

export default FindYourScent
