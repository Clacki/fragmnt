import { Check, CircleAlert } from "lucide-react"

import { cn } from "@/lib/utils"

type ToastVariant = "success" | "error"

type ToastProps = {
  message: string
  variant?: ToastVariant
  className?: string
}

const iconMap = {
  success: Check,
  error: CircleAlert,
}

const iconStyleMap = {
  success: "bg-status-success text-white",
  error: "bg-status-error text-white",
}

const Toast = ({ message, variant = "success", className }: ToastProps) => {
  const Icon = iconMap[variant]

  return (
    <div
      className={cn(
        "flex w-full max-w-[24rem] items-center gap-md rounded-2xl border border-border bg-surface-default px-lg py-md shadow-box",
        className
      )}
    >
      <div
        className={cn(
          "flex h-xl w-xl shrink-0 items-center justify-center rounded-full",
          iconStyleMap[variant]
        )}
      >
        <Icon className="h-lg w-lg" />
      </div>

      <p className="text-sm font-semibold text-text-primary">{message}</p>
    </div>
  )
}

export type { ToastProps, ToastVariant }
export default Toast
