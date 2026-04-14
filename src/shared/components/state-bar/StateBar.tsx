import { cn } from "@/lib/utils"

type StateBarProps = {
  label?: string
  value: number
  leftText?: string
  rightText?: string
  className?: string
  height?: number
}

export default function StateBar({
  label,
  value,
  leftText,
  rightText,
  className,
  height = 5,
}: StateBarProps) {
  const safeValue = Math.max(0, Math.min(100, value))
  const barHeight = Number.isFinite(height) ? height : 5

  return (
    <div
      className={cn(
        "flex w-full min-w-0 basis-full flex-col self-stretch",
        className
      )}
    >
      <div className="mb-xs flex w-full min-w-0 items-center justify-between gap-sm">
        <span className="truncate text-sm font-semibold text-text-primary">
          {label}
        </span>
        <span className="shrink-0 text-sm font-semibold text-text-primary">
          {safeValue}%
        </span>
      </div>

      <div className="w-full">
        <div
          className="overflow-hidden rounded-full bg-primary-disabled border border-border"
          style={{
            height: barHeight,
          }}
        >
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{
              width: `${safeValue}%`,
            }}
          />
        </div>
      </div>

      {(leftText || rightText) && (
        <div className="mt-xs flex w-full min-w-0 items-center justify-between gap-sm text-sm text-text-sub">
          <span className="truncate">{leftText}</span>
          <span className="truncate">{rightText}</span>
        </div>
      )}
    </div>
  )
}
