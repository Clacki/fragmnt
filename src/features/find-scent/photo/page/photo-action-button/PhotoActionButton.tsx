import cn from "@/lib/utils"
import type { ButtonHTMLAttributes, PropsWithChildren } from "react"

type PhotoActionButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement>
>

const PhotoActionButton = ({
  children,
  className,
  type = "button",
  ...props
}: PhotoActionButtonProps) => {
  return (
    <button
      type={type}
      className={cn(
        "w-70 h-10 font-bold md:w-full cursor-pointer rounded-md border border-border bg-white px-md py-sm text-md text-text-primary transition-colors duration-200 ease-out hover:bg-green-input",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default PhotoActionButton
