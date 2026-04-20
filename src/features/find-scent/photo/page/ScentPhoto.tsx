import {
  BackButton,
  Button,
  Container,
  PageIntro,
  Vstack,
} from "@/shared/components"
import { useState } from "react"
import type { MobilePhotoStep } from "../types/mobile-photo-step.types"
import PhotoTipsSection from "./photo-tips-section/PhotoTipsSection"
import PhotoUploadSection from "./photo-upload-section/PhotoUploadSection"

const ScentPhoto = () => {
  const [step, setStep] = useState<MobilePhotoStep>("select")
  const [previewUrl, setPreviewUrl] = useState("")

  const hasImage = Boolean(previewUrl)
  const isCameraStep = step === "camera"

  return (
    <Container className="px-10 pt-16 pb-20 md:px-30 md:pt-16 md:pb-40">
      <Vstack className="gap-md md:gap-lg">
        <PageIntro
          title="사진을 분석하여 향기를 찾습니다"
          description="이미지를 업로드하거나 직접 촬영하면 AI가 최적의 향기를 매칭합니다."
          backButton={<BackButton />}
        />

        <PhotoUploadSection
          step={step}
          previewUrl={previewUrl}
          setPreviewUrl={setPreviewUrl}
          onStepChange={setStep}
        />

        {!isCameraStep && <PhotoTipsSection />}
        {!isCameraStep && <Button disabled={!hasImage}>이미지 분석하기</Button>}
      </Vstack>
    </Container>
  )
}

export default ScentPhoto
