import type { DefaultButtonProps } from "@/shared/types"
import type { ReactNode } from "react"

type ButtonProps = {
  children: ReactNode
}
const Button = ({ children }: DefaultButtonProps & ButtonProps) => {
  // NOTE: inputs 폴더의 placeholder 용입니다
  return <button>{children}</button>
}

export default Button
