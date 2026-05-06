import { Container, FadeUpItem, PageIntro, Vstack } from "@/shared/components"
import { useNavigate } from "@tanstack/react-router"
import { useEffect, useState } from "react"
import { featureCardList } from "../data/feature-card-list"
import type { FeatureCardItem } from "../types/feature-card.type"
import FeatureCard from "./feature-card/FeatureCard"
import FindMethodModal from "./find-method-modal/FindMethodModal"
import "./find-scent.css"

const FindScent = () => {
  const navigate = useNavigate()
  const [isReady, setIsReady] = useState(false)
  const [isKeywordModalOpen, setIsKeywordModalOpen] = useState(false)

  useEffect(() => {
    const preloadImages = async () => {
      const imageLoaders = featureCardList.map((card) => {
        return new Promise((resolve, reject) => {
          const image = new Image()
          image.src = card.imageSrc
          image.onload = resolve
          image.onerror = reject
        })
      })

      try {
        await Promise.all(imageLoaders)
        setIsReady(true)
      } catch {
        setIsReady(true)
      }
    }

    preloadImages()
  }, [])

  const handleFeatureCardClick = (card: FeatureCardItem) => {
    if (card.actionType === "modal") {
      setIsKeywordModalOpen(true)
      return
    }

    if (card.to) {
      navigate({ to: card.to })
    }
  }

  return (
    <>
      <Container className="pt-16 md:pb-60 md:px-10">
        <Vstack gap="none" className="gap-12 md:gap-16">
          <PageIntro
            title="어떤 방식으로 향기를 찾을까요?"
            description={`당신의 공간과 취향,\n그 정교한 조각(Fragment)들을 분석해 드립니다`}
          />

          <div className="grid w-full grid-cols-1 justify-items-center gap-lg pb-28 md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:pb-0">
            {featureCardList.map((card, index) => (
              <FadeUpItem key={card.id} isReady={isReady} delay={index * 160}>
                <FeatureCard
                  {...card}
                  onClick={() => handleFeatureCardClick(card)}
                />
              </FadeUpItem>
            ))}
          </div>
        </Vstack>
      </Container>

      <FindMethodModal
        isOpen={isKeywordModalOpen}
        onClose={() => setIsKeywordModalOpen(false)}
      />
    </>
  )
}

export default FindScent
