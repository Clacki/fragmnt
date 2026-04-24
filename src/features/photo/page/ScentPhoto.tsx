import {
  BackButton,
  Button,
  Container,
  PageIntro,
  Vstack,
} from "@/shared/components"
import LoadingState from "@/shared/components/loading-state/LoadingState"
import { useNavigate } from "@tanstack/react-router"
import { useState } from "react"
import { usePostAnalysisUploadUrl } from "../hooks/usePostAnalysisUploadUrl"
import type { MobilePhotoStep } from "../types/mobile-photo-step.types"
import PhotoTipsSection from "./photo-tips-section/PhotoTipsSection"
import PhotoUploadSection from "./photo-upload-section/PhotoUploadSection"

const ScentPhoto = () => {
  const [step, setStep] = useState<MobilePhotoStep>("select")
  const [previewUrl, setPreviewUrl] = useState("")
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const navigate = useNavigate()
  const { mutateAsync: postAnalysisUploadUrl, isPending: isCreatingUploadUrl } =
    usePostAnalysisUploadUrl()

  const [isUploadingToS3, setIsUploadingToS3] = useState(false)

  const isSubmitting = isCreatingUploadUrl || isUploadingToS3

  const hasImage = Boolean(selectedFile)
  const isCameraStep = step === "camera"

  const handleBack = () => {
    navigate({ to: "/find-scent" })
  }

  const handleAnalyzeImage = async () => {
    if (!selectedFile) return

    try {
      const uploadUrlData = await postAnalysisUploadUrl({
        file_name: selectedFile.name,
      })
      setIsUploadingToS3(true)

      const uploadResponse = await fetch(uploadUrlData.presigned_url, {
        method: "PUT",
        headers: {
          "Content-Type": selectedFile.type,
        },
        body: selectedFile,
      })

      if (!uploadResponse.ok) {
        throw new Error("이미지 업로드에 실패했습니다.")
      }
    } finally {
      setIsUploadingToS3(false)
    }
  }

  return (
    <Container className="px-10 pt-16 pb-20 md:px-30 md:pt-16 md:pb-40">
      {isSubmitting && <LoadingState />}
      <Vstack className="gap-md md:gap-lg">
        <PageIntro
          title="사진을 분석하여 향기를 찾습니다"
          description="이미지를 업로드하거나 직접 촬영하면 AI가 최적의 향기를 매칭합니다."
          backButton={<BackButton onClick={handleBack} />}
        />

        <PhotoUploadSection
          step={step}
          previewUrl={previewUrl}
          setPreviewUrl={setPreviewUrl}
          onStepChange={setStep}
          setSelectedFile={setSelectedFile}
        />

        {!isCameraStep && <PhotoTipsSection />}
        {!isCameraStep && (
          <Button
            disabled={!hasImage || isSubmitting}
            onClick={handleAnalyzeImage}
          >
            이미지 분석하기
          </Button>
        )}
      </Vstack>
    </Container>
  )
}

export default ScentPhoto
