import { cn } from "@/lib/utils"
import { Button } from "@/shared/components"
import type { ButtonHTMLAttributes, ReactNode } from "react"
import { useState } from "react"
import "./scent-particle-button.css"

type ScentParticleButtonProps = {
  children: ReactNode
  isPending?: boolean
  ariaLabel?: string
  onClick?: () => void
  className?: string
} & Pick<ButtonHTMLAttributes<HTMLButtonElement>, "type">

const PARTICLE_COUNT = 8

const ScentParticleButton = ({
  children,
  isPending = false,
  ariaLabel,
  onClick,
  className,
  type = "button",
}: ScentParticleButtonProps) => {
  const [isParticleActive, setIsParticleActive] = useState(false)

  const playParticleEffect = () => {
    setIsParticleActive(false)

    window.requestAnimationFrame(() => {
      setIsParticleActive(true)
    })

    window.setTimeout(() => {
      setIsParticleActive(false)
    }, 700)
  }

  const handleClick = () => {
    onClick?.()
    playParticleEffect()
  }

  return (
    <div className="relative shrink-0">
      {isParticleActive && (
        <div className="pointer-events-none absolute inset-0 z-20 overflow-visible">
          {Array.from({ length: PARTICLE_COUNT }, (_, index) => (
            <span
              key={index}
              className={`scent-particle scent-particle-${index + 1}`}
            />
          ))}
        </div>
      )}

      <Button
        className={cn(
          "relative hover:bg-primary hover:text-surface-default",
          isParticleActive && "scent-button-pulse",
          className
        )}
        type={type}
        style="outlined"
        disabled={isPending}
        aria-label={ariaLabel}
        onClick={handleClick}
      >
        <span className={cn(isParticleActive && "scent-icon-pop")}>
          {children}
        </span>
      </Button>
    </div>
  )
}

export default ScentParticleButton
