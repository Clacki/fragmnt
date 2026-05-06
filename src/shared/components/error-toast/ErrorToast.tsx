import { parseErrorMessage } from "@/shared/utils/parse-error-message"
import type { AxiosError } from "axios"
import { useEffect } from "react"
import { Toast } from ".."

type ErrorToastProps<T extends AxiosError<{ code: string }>> = {
  isOn: boolean
  onClose: () => void
  error: T | null
}
const ErrorToast = <T extends AxiosError<{ code: string }>>({
  isOn,
  onClose,
  error,
}: ErrorToastProps<T>) => {
  useEffect(() => {
    if (!isOn) return

    const timer = setTimeout(() => {
      onClose()
    }, 3000)

    return () => clearTimeout(timer)
  }, [isOn]) // eslint-disable-line react-hooks/exhaustive-deps

  if (!error) return null
  const message = parseErrorMessage(error)
  if (!isOn) return null

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center">
      <div className="relative">
        <Toast variant="error" message={message} />
      </div>
    </div>
  )
}

export default ErrorToast
