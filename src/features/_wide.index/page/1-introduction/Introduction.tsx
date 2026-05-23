import MobileBgSrc from "@/assets/images/main/introduction-mobile.webp"
import BgSrc from "@/assets/images/main/introduction.webp"
import useAuthStore from "@/shared/api/use-auth-store"
import { Button, Vstack } from "@/shared/components"
import { useMediaQuery } from "@/shared/utils/use-media-query"
import { useNavigate } from "@tanstack/react-router"

const Introduction = () => {
  const accessToken = useAuthStore((state) => state.accessToken)
  const navigate = useNavigate()

  const { isWide } = useMediaQuery()

  const handleFindScentClick = () => {
    if (!accessToken) {
      navigate({ to: "/login" })
      return
    }

    navigate({ to: "/find-scent" })
  }

  return (
    <Vstack
      gap="2xl"
      className="relative items-center p-2xl justify-between overflow-hidden"
    >
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet={MobileBgSrc}
          width={640}
          height={360}
        />
        <img
          src={BgSrc}
          alt="소개 배경"
          fetchPriority="high"
          decoding="async"
          loading="eager"
          width={1920}
          height={1080}
          className="absolute top-0 inset-0 brightness-60 size-full object-cover"
        />
      </picture>

      <Vstack className="z-10 justify-between w-full flex-1 text-card">
        <Vstack gap="none" className={"text-2xl pb-25"}>
          <p>내 공간을 완성해줄</p>
          <h1 className="font-black">마지막 한 조각</h1>
        </Vstack>
        {isWide && (
          <Vstack gap="xs" className="font-thin">
            <p>가장 편안한 공간의 사진 한 장,</p>
            <p>혹은 지금의 기분만 들려주세요.</p>
            <p>당신의 취향 조각들을 모아</p>
            <p>공간을 완벽하게 마무리 해줄 향기를 찾아낼게요.</p>
          </Vstack>
        )}
      </Vstack>
      <Button size="sm" className="z-10" onClick={handleFindScentClick}>
        나의 마지막 조각 찾기
      </Button>
    </Vstack>
  )
}

export default Introduction
