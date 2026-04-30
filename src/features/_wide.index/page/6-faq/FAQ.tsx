import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button, Vstack } from "@/shared/components"
import SectionVstack from "../section-container/SectionContainer"
const FAQ = () => {
  return (
    <SectionVstack className="items-center" id="main-faq">
      <Vstack className="items-center">
        <h2 className="text-lg font-bold">자주 묻는 질문</h2>
        <p className="text-text-sub">
          Fragmnt 서비스에 대해 궁금한 점을 확인해보세요.
        </p>
      </Vstack>
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>AI는 어떻게 향기를 추천하나요?</AccordionTrigger>
          <AccordionContent>
            사용자가 업로드한 사진의 색감, 자재, 가구 배치 등 시각적 요소를 AI가
            분석합니다. 이를 통해 추출된 공간의 지배적인 무드를 조합하여, 해당
            공간에 가장 잘 어우러지는 향기 노트를 제안합니다.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            추천받은 향기 제품은 어디서 구매하나요?
          </AccordionTrigger>
          <AccordionContent>
            분석 결과 페이지 내 제품 카드를 통해 해당 브랜드의 공식 판매처로
            편리하게 이동할 수 있습니다. fragmnt는 다양한 향기 브랜드의 데이터를
            큐레이션하여 사용자에게 최적의 구매 경험을 제공합니다.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>향기 추천은 얼마나 정확한가요?</AccordionTrigger>
          <AccordionContent>
            공간 인테리어와 향조 간의 상관관계 데이터를 바탕으로 정교한 매칭
            알고리즘을 수행합니다. 사용자가 공간에 대해 느끼는 주관적인 인상과
            시각적 데이터를 결합하기에, 단순 추천보다 개인화된 결과값을 얻을 수
            있습니다.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>개인정보는 안전하게 보호되나요?</AccordionTrigger>
          <AccordionContent>
            제공해주신 이미지 데이터는 오직 향기 분석 및 추천을 위한 용도로만
            활용됩니다. 모든 데이터는 암호화되어 안전하게 관리되며, 사용자가
            원할 경우 언제든지 서버에서 즉시 삭제가 가능합니다.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <p>원하시는 답변을 찾지 못했나요?</p>
      <Button radius="full" style="outlined">
        문의하기
      </Button>
    </SectionVstack>
  )
}

export default FAQ
