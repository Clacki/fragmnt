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
import { uploadImageToS3 } from "../api/image-analysis.api"
import { usePostAnalysisUploadUrl } from "../hooks/usePostAnalysisUploadUrl"
import { usePostImageAnalysis } from "../hooks/usePostImageAnalysis"
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
  const { mutateAsync: postImageAnalysis, isPending: isAnalyzingImage } =
    usePostImageAnalysis()

  const [isUploadingToS3, setIsUploadingToS3] = useState(false)

  const isSubmitting =
    isCreatingUploadUrl || isUploadingToS3 || isAnalyzingImage

  const hasImage = Boolean(selectedFile)

  const handleBack = () => {
    navigate({ to: "/find-scent" })
  }

  const handleAnalyzeImage = async () => {
    if (!selectedFile) {
      return
    }

    try {
      setIsUploadingToS3(true)

      const uploadUrlData = await postAnalysisUploadUrl({
        file_name: selectedFile.name,
      })

      await uploadImageToS3({
        presignedUrl: uploadUrlData.presigned_url,
        file: selectedFile,
      })

      const analysisResult = await postImageAnalysis({
        image_key: uploadUrlData.key,
      })

      navigate({
        to: "/find-scent/result/$resultId",
        params: {
          resultId: String(analysisResult.id),
        },
        search: {
          type: "image",
        },
      })
    } finally {
      setIsUploadingToS3(false)
    }
  }

  if (isSubmitting) {
    return (
      <Container className="py-60">
        <LoadingState />
      </Container>
    )
  }

  return (
    <Container className="px-10 pt-16 pb-20 md:px-30 md:pt-16 md:pb-40">
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

        <PhotoTipsSection />
        <Button
          disabled={!hasImage || isSubmitting}
          onClick={handleAnalyzeImage}
        >
          이미지 분석하기
        </Button>
      </Vstack>
    </Container>
  )
}

export default ScentPhoto
