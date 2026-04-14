import { useState } from "react"

import { cn } from "@/lib/utils"
import { Empty } from "@/shared/components"
import type { SimilarScentProps } from "@/shared/types"

const SimilarScent = ({
  imageSrc,
  imageAlt = "scent image",
  title,
  label,
  description,
  onClick,
  className,
}: SimilarScentProps) => {
  const [isError, setIsError] = useState(false)

  return (
    // 추후 버튼 컴포넌트로 대체 예정
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex w-full overflow-hidden rounded-lg border border-border bg-white text-left transition-all",
        "hover:shadow-md",
        className
      )}
    >
      <div className="w-1/3 aspect-square shrink-0 overflow-hidden bg-disabled self-stretch">
        {imageSrc && !isError ? (
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-full w-full object-cover"
            onError={() => setIsError(true)}
          />
        ) : (
          <Empty type="image" size="md" className="rounded-none" />
        )}
      </div>

      {/* 텍스트 영역 */}
      <div className="flex min-w-0 flex-1 flex-col justify-center px-md py-md">
        {label && (
          <span className="text-sm font-light tracking-wide text-text-sub">
            {label}
          </span>
        )}

        <h3 className="mt-1 truncate text-lg font-bold text-text-primary">
          {title}
        </h3>

        {description && (
          <p className="mt-sm line-clamp-1 text-sm leading-relaxed text-text-sub">
            {description}
          </p>
        )}
      </div>
    </button>
  )
}

export default SimilarScent
