import type { HTMLInputTypeAttribute, ReactNode } from "react"

import { cn } from "@/lib/utils"
import { Input } from "@/shared/components"

type EditFieldProps = {
  label: string
  value: string
  onChange: (value: string) => void
  icon: ReactNode
  type?: HTMLInputTypeAttribute
  max?: string
}

export default function EditField({
  label,
  value,
  onChange,
  icon,
  type = "text",
  max,
}: EditFieldProps) {
  return (
    <div
      className={cn(
        "flex w-full min-w-0 items-center gap-3 rounded-lg border border-border-primary bg-card p-lg",
        "shadow-md"
      )}
    >
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-tag text-text-primary">
        {icon}
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-center">
        <span className="text-sm leading-none text-text-sub">{label}</span>

        <Input
          type={type}
          value={value}
          max={max}
          className="w-full min-w-0"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.value)
          }
        />
      </div>
    </div>
  )
}
