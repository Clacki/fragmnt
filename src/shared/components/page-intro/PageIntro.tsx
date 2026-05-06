import clsx from "clsx"
import type { ReactNode } from "react"

type PageIntroProps = {
  title: string
  description?: string
  backButton?: ReactNode
  className?: string
}

const PageIntro = ({
  title,
  description,
  backButton,
  className,
}: PageIntroProps) => {
  const formattedDescription = description?.replace(/,\s*/g, ",\n")
  return (
    <div className={clsx("relative w-full", className)}>
      {backButton && (
        <div className="absolute left-0 top-0 hidden md:flex">{backButton}</div>
      )}

      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-lg md:text-3xl font-bold text-text-primary">
          {title}
        </h1>
        {formattedDescription && (
          <p className="whitespace-pre-line break-keep text-sm text-text-description md:text-base">
            {formattedDescription}
          </p>
        )}
      </div>
    </div>
  )
}

export default PageIntro
