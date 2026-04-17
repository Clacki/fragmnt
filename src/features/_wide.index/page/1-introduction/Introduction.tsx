import BgSrc from "@/assets/images/main/introduction.png"
import { Button, Vstack } from "@/shared/components"

const Introduction = () => {
  return (
    <Vstack
      gap="2xl"
      className="relative h-125 items-center p-2xl justify-between overflow-hidden"
    >
      <img
        src={BgSrc}
        alt="소개 배경"
        className="absolute top-0 inset-0 brightness-60"
      />

      <Vstack className="z-10 justify-between w-full flex-1 text-card">
        <Vstack gap="none" className="text-2xl">
          <p>내 공간을 완성해줄</p>
          <h1 className="font-black">마지막 한 조각</h1>
        </Vstack>
        <Vstack gap="xs" className="font-thin">
          <p>가장 편안한 공간의 사진 한 장,</p>
          <p>혹은 지금의 기분만 들려주세요.</p>
          <p>당신의 취향 조각들을 모아</p>
          <p>공간을 완벽하게 마무리 해줄 향기를 찾아낼게요.</p>
        </Vstack>
      </Vstack>
      <Button size="sm" className="z-10">
        나의 마지막 조각 찾기
      </Button>
    </Vstack>
  )
}

export default Introduction
