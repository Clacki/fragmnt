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
  const Icon = isHidden ? <Eye size={16} /> : <EyeOff size={16} />

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={isHidden ? "비밀번호 보기" : "비밀번호 숨기기"}
    >
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
