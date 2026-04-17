import { Button } from "@/shared/components"
import type { FeatureCardProps } from "../../types/feature-card.type"

const FeatureCard = ({
  imageSrc,
  title,
  imageAlt,
  description,
  buttonLabel = "향기 찾기",
  onClick,
}: FeatureCardProps) => {
  return (
    <article className="flex flex-col items-center border border-gray-20 rounded-3xl overflow-hidden shadow-box bg-white w-[250px] h-[360px] transition-all duration-300 hover:-translate-y-2">
      <div className="h-[200px] w-full overflow-hidden">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-col flex-1 items-center px-8 pt-5 pb-4">
        <div className="flex flex-col items-center gap-2">
          <h3 className="font-bold text-[20px] ">{title}</h3>
          <p className="text-center font-normal text-text-description text-sm whitespace-pre-line">
            {description}
          </p>
        </div>
        <Button type="button" onClick={onClick} size="sm" className="mt-auto">
          {buttonLabel}
        </Button>
      </div>
    </article>
  )
}

export default FeatureCard
