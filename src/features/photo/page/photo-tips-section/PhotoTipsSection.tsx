import { Focus, Sofa, SunMedium } from "lucide-react"

const photoTips = [
  {
    icon: SunMedium,
    text: "너무 어둡지않은 이미지를 사용해주세요",
  },
  {
    icon: Sofa,
    text: "공간의 분위기를 담아주세요",
  },
  {
    icon: Focus,
    text: "선명한 이미지를 사용해주세요",
  },
]

const PhotoTipsSection = () => {
  return (
    <section className="w-full rounded-xl border border-border bg-white p-lg">
      <strong className="text-md font-bold text-text-primary">
        사진 가이드
      </strong>

      <ul className="mt-md flex flex-col gap-md">
        {photoTips.map(({ icon: Icon, text }) => (
          <li key={text} className="flex items-center gap-sm text-text-sub">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-surface-default">
              <Icon className="h-4 w-4 text-primary" />
            </span>
            <span className="text-sm md:text-md">{text}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default PhotoTipsSection
