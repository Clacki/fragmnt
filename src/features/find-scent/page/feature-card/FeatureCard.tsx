import { Button } from "@/shared/components"
import type { KeyboardEvent } from "react"
import type { FeatureCardProps } from "../../types/feature-card.type"

const FeatureCard = ({
  imageSrc,
  title,
  imageAlt,
  description,
  buttonLabel = "향기 찾기",
  onClick,
}: FeatureCardProps) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (!onClick) {
      return
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      onClick()
    }
  }

  return (
    <article
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      className="flex h-[360px] w-[250px] cursor-pointer flex-col overflow-hidden rounded-3xl border border-gray-20 bg-white shadow-box transition-all duration-300 hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-primary"
    >
      <div className="h-[200px] w-full overflow-hidden">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col items-center px-8 pt-5 pb-4">
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-[20px] font-bold">{title}</h3>
          <p className="whitespace-pre-line text-center text-sm font-normal text-text-description">
            {description}
          </p>
        </div>

        <Button
          type="button"
          size="sm"
          className="pointer-events-none mt-auto"
          tabIndex={-1}
        >
          {buttonLabel}
        </Button>
      </div>
    </article>
  )
}

export default FeatureCard
