import type {
  None,
  TailwindCSS,
  XsTo2xl,
} from "../types/commonPropsTypes/commonPropsTypes"

export const gapVariants: Record<None | XsTo2xl, TailwindCSS> = {
  none: "gap-0",
  xs: "gap-xs",
  sm: "gap-sm",
  md: "gap-md",
  lg: "gap-lg",
  xl: "gap-xl",
  "2xl": "gap-2xl",
}

export const paddingVariants: Record<None | XsTo2xl, TailwindCSS> = {
  none: "p-0",
  xs: "p-xs",
  sm: "p-sm",
  md: "p-md",
  lg: "p-lg",
  xl: "p-xl",
  "2xl": "p-2xl",
}
