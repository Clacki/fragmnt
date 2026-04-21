import { RefreshCw, X } from "lucide-react"
import { useCallback, useEffect, useRef, useState } from "react"
import CameraIconButton from "./camera-icon-button/CameraIconButton"

type CameraFacingMode = "user" | "environment"

type MobileCameraContentProps = {
  onCapture: (imageUrl: string) => void
  onClose: () => void
}

const MobileCameraContent = ({
  onCapture,
  onClose,
}: MobileCameraContentProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const streamRef = useRef<MediaStream | null>(null)

  const [facingMode, setFacingMode] = useState<CameraFacingMode>("environment")
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState("")
  const [isFlashActive, setIsFlashActive] = useState(false)

  const triggerFlash = () => {
    setIsFlashActive(true)

    window.setTimeout(() => {
      setIsFlashActive(false)
    }, 120)
  }

  const getMediaStream = async (nextFacingMode: CameraFacingMode) => {
    try {
      return await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: { exact: nextFacingMode },
        },
        audio: false,
      })
    } catch {
      return navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: { ideal: nextFacingMode },
        },
        audio: false,
      })
    }
  }

  const stopStream = useCallback(() => {
    streamRef.current?.getTracks().forEach((track) => {
      track.stop()
    })
    streamRef.current = null
  }, [])

  const startCamera = useCallback(
    async (nextFacingMode: CameraFacingMode) => {
      stopStream()

      const stream = await getMediaStream(nextFacingMode)

      streamRef.current = stream

      if (videoRef.current) {
        videoRef.current.srcObject = stream
      }
    },
    [stopStream]
  )

  const handleSwitchCamera = () => {
    const nextFacingMode = facingMode === "environment" ? "user" : "environment"
    setFacingMode(nextFacingMode)
  }

  const handleCapture = () => {
    const video = videoRef.current
    const canvas = canvasRef.current

    if (!video || !canvas) {
      return
    }

    const context = canvas.getContext("2d")

    if (!context) {
      return
    }

    triggerFlash()

    canvas.width = video.videoWidth
    canvas.height = video.videoHeight

    context.drawImage(video, 0, 0, canvas.width, canvas.height)

    const imageUrl = canvas.toDataURL("image/jpeg", 0.9)
    onCapture(imageUrl)
  }

  useEffect(() => {
    const setupCamera = async () => {
      try {
        setIsLoading(true)
        setErrorMessage("")
        await startCamera(facingMode)
      } catch {
        setErrorMessage("카메라를 불러오지 못했습니다. 권한을 확인해 주세요.")
        setIsLoading(false)
      }
    }

    void setupCamera()

    return () => {
      stopStream()
    }
  }, [facingMode, startCamera, stopStream])

  return (
    <section className="flex flex-col gap-md">
      <div className="relative overflow-hidden rounded-xl bg-black">
        <div className="aspect-3/4 w-full">
          {!errorMessage && (
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              onLoadedMetadata={() => {
                setIsLoading(false)
              }}
              className="h-full w-full object-cover"
            />
          )}

          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black text-sm text-white">
              카메라를 준비하는 중...
            </div>
          )}

          {errorMessage && (
            <div className="flex h-full items-center justify-center px-lg text-center text-sm text-white">
              {errorMessage}
            </div>
          )}
        </div>

        {isFlashActive && (
          <div className="pointer-events-none absolute inset-0 bg-white/80" />
        )}

        <CameraIconButton
          onClick={onClose}
          label="카메라 닫기"
          className="absolute top-md left-md"
        >
          <X size={18} />
        </CameraIconButton>

        <CameraIconButton
          onClick={handleSwitchCamera}
          label="전면 후면 카메라 전환"
          className="absolute top-md right-md"
        >
          <RefreshCw size={18} />
        </CameraIconButton>
      </div>

      <div className="flex items-center justify-center gap-lg">
        <button
          type="button"
          onClick={handleCapture}
          disabled={Boolean(errorMessage) || isLoading}
          className="flex h-18 w-18 items-center justify-center rounded-full border-4 border-white bg-surface-default shadow-lg transition-transform duration-150 active:scale-95 disabled:opacity-40"
          aria-label="사진 촬영"
        >
          <span className="h-14 w-14 rounded-full bg-white" />
        </button>
      </div>

      <canvas ref={canvasRef} className="hidden" />
    </section>
  )
}

export default MobileCameraContent
