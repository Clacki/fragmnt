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
  return (
    <div className={clsx("relative w-full", className)}>
      {backButton && <div className="absolute left-0 top-0">{backButton}</div>}

      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-3xl font-bold text-text-primary">{title}</h1>
        {description && (
          <p className="whitespace-pre-line text-base text-text-description">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}

export default PageIntro
