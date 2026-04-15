import { toast } from "sonner"

import Toast from "./Toast"

const showSuccessToast = ({ message }: { message: string }) => {
  toast.custom(() => <Toast message={message} variant="success" />)
}

const showErrorToast = ({ message }: { message: string }) => {
  toast.custom(() => <Toast message={message} variant="error" />)
}

export { showErrorToast, showSuccessToast }
