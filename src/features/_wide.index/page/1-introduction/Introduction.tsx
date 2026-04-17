import { Button, Vstack } from "@/shared/components"

const Introduction = () => {
  return (
    <Vstack className="h-125 items-center p-2xl justify-between bg-amber-50">
      <Vstack className="justify-start w-full">
        <h1>내 공간을 완성해줄 마지막 한 조각</h1>
        <p>가장 편안한 공간의 사진 한 장,</p>
        <p>혹은 지금의 기분만 들려주세요.</p>
        <p>당신의 취향 조각들을 모아</p>
        <p>공간을 완벽하게 마무리 해줄 향기를 찾아낼게요.</p>
      </Vstack>
      <Button>나의 마지막 조각 찾기</Button>
    </Vstack>
  )
}

export default Introduction
