import cn from "@/lib/utils"
import type { DefaultButtonProps, DivProps } from "@/shared/types"
import clsx from "clsx"
import type { ReactNode } from "react"
import { Button } from "../inputs"
import type { ButtonStyle } from "../inputs/Button/Button"
import { RoundBox, Vstack } from "../layouts"
import HOrVStack from "../layouts/HOrVStack/HOrVStack"

type ModalContentTitleProps = {
  children: string
}
const ModalContentTitle = ({ children }: ModalContentTitleProps) => {
  return <h1 className="font-bold text-center">{children}</h1>
}

const ModalContentBody = (props: DivProps) => {
  const { children, className, ...rest } = props
  return (
    <div {...rest} className={cn("flex-1 text-center", className)}>
      {children}
    </div>
  )
}
type ModalContentButtonSectionProps = {
  children: ReactNode
}
const ModalContentButtonSection = ({
  children,
}: ModalContentButtonSectionProps) => {
  return <HOrVStack>{children}</HOrVStack>
}
type ModalButtonRole = "cancel" | "confirm" | "destruct"
type WithModalContentButtonProps = {
  role: ModalButtonRole
}

const ModalContentButton = ({
  role,
  ...props
}: Omit<DefaultButtonProps, "style" | "className"> &
  WithModalContentButtonProps) => {
  const { children, ...rest } = props
  const roleToButtonConfig: Record<
    ModalButtonRole,
    { style: ButtonStyle; className?: string }
  > = {
    cancel: { style: "outlined" },
    confirm: { style: "contained" },
    destruct: { style: "contained", className: "bg-status-error text-card" },
  }
  const buttonConfig = roleToButtonConfig[role]
  return (
    <Button
      {...rest}
      style={buttonConfig.style}
      className={clsx("w-full", buttonConfig.className)}
    >
      {children}
    </Button>
  )
}
type ModalContentProps = {
  children: ReactNode
}
const ModalContent = ({ children }: ModalContentProps) => {
  return (
    <RoundBox padding="xl">
      <Vstack gap="xl" className="text-text-primary">
        {children}
      </Vstack>
    </RoundBox>
  )
}

ModalContent.Title = ModalContentTitle
ModalContent.Body = ModalContentBody
ModalContent.ButtonSection = ModalContentButtonSection
ModalContent.Button = ModalContentButton

export default ModalContent
