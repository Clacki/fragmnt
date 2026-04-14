import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

type EmptyStateProps = {
  imageSrc: string
  imageAlt?: string
  title: string
  description: string
  action?: ReactNode
  className?: string
}

const EmptyState = ({
  imageSrc,
  imageAlt = "",
  title,
  description,
  action,
  className,
}: EmptyStateProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-lg border border-border bg-surface-default px-xl py-2xl text-center",
        className
      )}
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        className="mb-xl h-40 w-40 object-contain"
      />

      <div className="flex flex-col items-center gap-sm">
        <h3 className="text-md font-bold text-text-sub">{title}</h3>
        <p className="text-sm leading-6 text-text-description">{description}</p>
      </div>

      {action ? <div className="mt-xl">{action}</div> : null}
    </div>
  )
}

export default EmptyState
