import cn from "@/lib/utils"
import type { ButtonHTMLAttributes, PropsWithChildren } from "react"

type CameraIconButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement>
> & {
  label: string
}

const CameraIconButton = ({
  children,
  className,
  label,
  type = "button",
  ...props
}: CameraIconButtonProps) => {
  return (
    <button
      type={type}
      aria-label={label}
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-full bg-text-primary text-white backdrop-blur-sm",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default CameraIconButton
