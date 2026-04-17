import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/shared/components"
import SectionVstack from "../section-container/SectionContainer"
const FAQ = () => {
  return (
    <SectionVstack className="items-center">
      <h1>자주 묻는 질문</h1>
      <h2>Fragmnt 서비스에 대해 궁금한 점을 확인해보세요.</h2>
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <p>원하시는 답변을 찾지 못했나요?</p>
      <Button shape="pill" isContained={false}>
        문의하기
      </Button>
    </SectionVstack>
  )
}

export default FAQ
