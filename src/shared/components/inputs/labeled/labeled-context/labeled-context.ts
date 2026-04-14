import { createComponentContext } from "@/shared/utils/create-component-context"
import type { WithLabeledProps } from "../Labeled"

type LabeledContextProps = WithLabeledProps
const {
  ComponentContextProvider: LabeledContextProvider,
  useComponentContext: useLabeledContext,
} = createComponentContext<LabeledContextProps>()

export { LabeledContextProvider, useLabeledContext }
