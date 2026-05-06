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
      className="flex h-auto w-full max-w-[320px] cursor-pointer overflow-hidden rounded-3xl border border-gray-20 bg-white shadow-box transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary md:h-[360px] md:w-[250px] md:flex-col md:hover:-translate-y-2"
    >
      <div className="h-auto w-[112px] shrink-0 overflow-hidden md:h-[200px] md:w-full">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-full min-h-[132px] w-full object-cover md:min-h-0"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-center gap-sm px-md py-md md:items-center md:px-8 md:pb-4 md:pt-5">
        <div className="flex min-w-0 flex-col gap-2 md:items-center">
          <h3 className="break-keep text-md font-bold text-text-primary md:text-[20px]">
            {title}
          </h3>

          <p className="line-clamp-2 break-keep text-sm font-normal text-text-description md:whitespace-pre-line md:text-center">
            {description}
          </p>
        </div>

        <Button
          type="button"
          size="sm"
          className="pointer-events-none mt-sm w-fit md:mt-auto"
          tabIndex={-1}
        >
          {buttonLabel}
        </Button>
      </div>
    </article>
  )
}

export default FeatureCard
