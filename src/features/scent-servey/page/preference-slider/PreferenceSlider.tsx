import clsx from "clsx"
import "./preference-slider.css"

type PreferenceSliderProps = {
  order: number
  title: string
  description: string
  labels: [string, string, string, string, string]
  edgeLabels?: [string, string]
  value: number
  onChange?: (value: number) => void
  className?: string
}

const POINTS = [0, 1, 2, 3, 4] as const
const LAST_POINT_INDEX = POINTS.length - 1

const PreferenceSlider = ({
  order,
  title,
  description,
  labels,
  edgeLabels,
  value,
  onChange,
  className,
}: PreferenceSliderProps) => {
  const percentage = (value / LAST_POINT_INDEX) * 100
  const selectedLabel = labels[value]
  const [leftEdgeLabel, rightEdgeLabel] = edgeLabels ?? [labels[0], labels[4]]

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!onChange) {
      return
    }

    onChange(Number(event.target.value))
  }

  return (
    <article
      className={clsx(
        "flex w-full flex-col gap-md rounded-2xl border border-border bg-card p-lg",
        className
      )}
    >
      <header className="flex items-start gap-sm">
        <div className="flex mt-xs pt-xs h-xl w-xl shrink-0 items-center justify-center rounded-full bg-primary">
          <span className="text-lg font-bold text-card">{order}</span>
        </div>

        <div className="flex flex-col">
          <h3 className="text-lg font-bold text-text-primary">{title}</h3>
          <p className="text-md text-text-sub">{description}</p>
        </div>
      </header>

      <div className="flex flex-col px-xl pb-xl">
        <div className="flex items-center justify-between text-md text-text-sub">
          <span>{leftEdgeLabel}</span>
          <span>{rightEdgeLabel}</span>
        </div>

        <div className="relative py-md">
          <div className="pointer-events-none absolute inset-x-0 top-1/2 h-xs -translate-y-1/2 rounded-full bg-border" />

          {POINTS.map((point) => {
            const pointLeft = `${(point / LAST_POINT_INDEX) * 100}%`

            return (
              <span
                key={`dot-${point}`}
                className="pointer-events-none absolute top-1/2 z-10 h-md w-md -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-card bg-border"
                style={{ left: pointLeft }}
              />
            )
          })}

          <span
            className="pointer-events-none absolute top-1/2 z-20 h-xl w-xl -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-card bg-primary"
            style={{ left: `${percentage}%` }}
          />

          {POINTS.map((point) => {
            const pointLeft = `${(point / LAST_POINT_INDEX) * 100}%`

            return (
              <button
                key={`button-${point}`}
                type="button"
                aria-label={labels[point]}
                className="absolute top-1/2 z-30 h-xl w-xl -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{ left: pointLeft }}
                onClick={() => {
                  if (!onChange) {
                    return
                  }

                  onChange(point)
                }}
              />
            )
          })}

          <input
            type="range"
            min={0}
            max={LAST_POINT_INDEX}
            step={1}
            value={value}
            onChange={handleChange}
            aria-label={title}
            className="preference-slider absolute inset-0 z-40"
          />

          <output
            className="absolute top-full z-20 mt-sm -translate-x-1/2 whitespace-nowrap rounded-full border border-border bg-surface-container px-sm py-xs text-sm font-bold text-text-highlight shadow-sm"
            style={{ left: `${percentage}%` }}
          >
            {selectedLabel}
          </output>
        </div>
      </div>
    </article>
  )
}

export default PreferenceSlider
