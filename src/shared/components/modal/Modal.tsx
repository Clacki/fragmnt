import cn from "@/lib/utils"
import type { ReactNode } from "react"

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  className?: string
}

const Modal = ({ isOpen, onClose, children, className }: ModalProps) => {
  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <button
        type="button"
        aria-label="모달 닫기"
        className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onClose}
      />

      <article
        className={cn(
          "relative z-10 w-[90%] max-w-[372px] rounded-lg bg-surface-default shadow-box animate-in fade-in zoom-in-95 slide-in-from-bottom-2 duration-200",
          className
        )}
      >
        {children}
      </article>
    </div>
  )
}

export default Modal
