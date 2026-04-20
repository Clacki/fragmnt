import { Button, RoundBox, Vstack } from "@/shared/components"
import clsx from "clsx"
import { ChevronRight } from "lucide-react"
import type { ReactNode } from "react"

type CardWithImageChildProps = {
  children: ReactNode
  className?: string
}
type CardWithImageImageProps = {
  imgSrc: string
  className?: string
}
const CardWithImageImage = ({ imgSrc, className }: CardWithImageImageProps) => {
  return <img src={imgSrc} className={clsx("w-full", className)} />
}
const CardWithImageCategory = ({ children }: { children: string }) => {
  return <p>{children}</p>
}
const CardWithImageTitle = ({ children }: { children: string }) => {
  return <p className="font-bold">{children}</p>
}
const CardWithImageDescription = ({
  children,
  className,
}: CardWithImageChildProps) => {
  return <p className={clsx("text-text-sub text-sm", className)}>{children}</p>
}
type WithCardWithImageButtonProps = {
  onClick: () => void
}
const CardWithImageButton = ({
  children,
  className,
  onClick,
}: CardWithImageChildProps & WithCardWithImageButtonProps) => {
  return (
    <Button
      padding="same"
      size="sm"
      style="ghost"
      onClick={onClick}
      className={className}
    >
      {children}
      <ChevronRight />
    </Button>
  )
}

const CardWithImageContent = ({
  children,
  className,
}: CardWithImageChildProps) => {
  return (
    <Vstack
      gap="sm"
      className={clsx("flex-1 p-xl w-full items-start", className)}
    >
      {children}
    </Vstack>
  )
}

type CardWithImageProps = {
  direction: "horizontal" | "vertical"
  children: ReactNode
  className?: string
}
const CardWithImage = ({
  direction,
  children,
  className,
}: CardWithImageProps) => {
  return (
    <RoundBox
      padding="none"
      className={clsx(
        "bg-card",
        "overflow-hidden",
        "shadow-box",
        {
          flex: direction == "horizontal",
          "flex flex-col items-start": direction == "vertical",
        },
        className
      )}
    >
      {children}
    </RoundBox>
  )
}
CardWithImage.Image = CardWithImageImage
CardWithImage.Category = CardWithImageCategory
CardWithImage.Title = CardWithImageTitle
CardWithImage.Description = CardWithImageDescription
CardWithImage.Button = CardWithImageButton
CardWithImage.Content = CardWithImageContent

export default CardWithImage
