import type { WebSharedScent } from "../../types/web-shared.types"
import { SCENT_AXIS_LABELS } from "./shared-scent-visual.constants"
import { getScentTheme, getScentVisualStyle } from "./shared-scent-visual.utils"

type SharedScentVisualProps = {
  scent: WebSharedScent
}

const SharedScentVisual = ({ scent }: SharedScentVisualProps) => {
  const theme = getScentTheme(scent)
  const scentStyle = getScentVisualStyle(scent)

  return (
    <section className="relative flex h-[360px] w-full items-center justify-center overflow-hidden">
      <div
        className={`shared-scent-diffusion absolute z-0 h-44 w-44 rounded-full ${theme.blobClassName} blur-xl`}
        style={scentStyle}
      />

      <div
        className={`shared-scent-axis-y absolute z-10 h-[260px] w-px origin-center ${theme.lineClassName}`}
      />

      <div
        className={`shared-scent-axis-x absolute z-10 h-px w-[85%] origin-center ${theme.lineClassName}`}
      />

      {SCENT_AXIS_LABELS.map(({ positionClassName, label }) => {
        return (
          <span key={label} className={`absolute z-20 ${positionClassName}`}>
            <span
              className={`shared-scent-label block rounded-full px-sm py-[2px] text-xs font-medium backdrop-blur-sm ${theme.labelClassName}`}
            >
              {label}
            </span>
          </span>
        )
      })}
    </section>
  )
}

export default SharedScentVisual
