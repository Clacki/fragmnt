import type { DivProps } from "@/shared/types"
import { Vstack } from "../../layouts"
import { LabeledContextProvider } from "./labeled-context/labeled-context"
import LabeledMessage from "./labeled-message/LabeledMessage"
import LabeledTitle from "./labeled-title/LabeledTitle"

export interface WithLabeledProps {
  isError?: boolean
}
const Labeled = ({
  isError = false,
  ...props
}: DivProps & WithLabeledProps) => {
  const { children, ...rest } = props

  return (
    <LabeledContextProvider value={{ isError }}>
      <Vstack {...rest} gap="none">
        {children}
      </Vstack>
    </LabeledContextProvider>
  )
}

Labeled.Title = LabeledTitle
Labeled.Message = LabeledMessage

export default Labeled
