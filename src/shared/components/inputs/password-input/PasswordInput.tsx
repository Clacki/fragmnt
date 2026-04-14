import type { InputProps } from "@/shared/types"
import { Eye, EyeOff } from "lucide-react"
import { useState, type Dispatch, type SetStateAction } from "react"
import Input from "../Input/Input"

type EyeButtonProps = {
  isHidden: boolean
  setIsHidden: Dispatch<SetStateAction<boolean>>
}
const EyeButton = ({ isHidden, setIsHidden }: EyeButtonProps) => {
  const handleClick = () => setIsHidden((prev) => !prev)
  const Icon = isHidden ? <EyeOff size={16} /> : <Eye size={16} />
  return (
    <button type="button" onClick={handleClick}>
      {Icon}
    </button>
  )
}

type WithPasswordInputProps = {
  isError: boolean
}
const PasswordInput = ({
  isError,
  ...props
}: Omit<InputProps, "type"> & WithPasswordInputProps) => {
  const [isHidden, setIsHidden] = useState(true)
  return (
    <Input
      {...props}
      status={isError ? "error" : "none"}
      type={isHidden ? "password" : "text"}
      trailingChild={
        <EyeButton isHidden={isHidden} setIsHidden={setIsHidden} />
      }
    />
  )
}

export default PasswordInput
