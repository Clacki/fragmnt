import cn from "@/lib/utils"

type UploadPreviewBoxProps = {
  previewUrl: string
}

const UploadPreviewBox = ({ previewUrl }: UploadPreviewBoxProps) => {
  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-xl bg-white",
        previewUrl
          ? "border border-transparent"
          : "aspect-[4/3] min-h-64 border-2 border-dashed border-primary"
      )}
    >
      {previewUrl ? (
        <img
          src={previewUrl}
          alt="업로드한 미리보기 이미지"
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-sm p-lg text-center">
          <h3 className="text-md font-bold text-text-primary">
            이미지를 업로드해 주세요
          </h3>
          <p className="text-sm text-text-description">
            아래 버튼을 눌러 이미지를 선택할 수 있어요
          </p>
        </div>
      )}
    </div>
  )
}

export default UploadPreviewBox
