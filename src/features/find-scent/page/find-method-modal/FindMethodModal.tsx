import { Modal } from "@/shared/components"
import { useNavigate } from "@tanstack/react-router"
import { ClipboardPen, Sparkles, type LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

type FindMethodModalProps = {
  isOpen: boolean
  onClose: () => void
}

type FindMethodOptionProps = {
  icon: LucideIcon
  title: string
  description: ReactNode
  onClick?: () => void
}

const optionButtonStyle =
  "w-full cursor-pointer rounded-2xl border border-border bg-white p-md text-left text-text-sub transition-all duration-200 ease-out hover:-translate-y-[1px] hover:border-primary-hover hover:bg-green-input hover:shadow-sm active:translate-y-0 active:scale-[0.99]"

const iconWrapperStyle =
  "flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green-input"

const FindMethodOption = ({
  icon: Icon,
  title,
  description,
  onClick,
}: FindMethodOptionProps) => {
  return (
    <button type="button" className={optionButtonStyle} onClick={onClick}>
      <div className="flex items-center gap-md">
        <div className={iconWrapperStyle}>
          <Icon className="h-7 w-7 text-primary" strokeWidth={2} />
        </div>

        <div className="text-left">
          <strong className="block text-md font-bold text-text-primary">
            {title}
          </strong>
          <span className="mt-1 block text-sm leading-relaxed text-text-secondary">
            {description}
          </span>
        </div>
      </div>
    </button>
  )
}

const FindMethodModal = ({ isOpen, onClose }: FindMethodModalProps) => {
  const navigate = useNavigate()

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col gap-lg p-xl text-center">
        <div className="flex flex-col gap-xs">
          <h2 className="text-lg font-bold text-text-primary whitespace-nowrap">
            향기 찾기 방식을 선택해주세요
          </h2>
          <p className="text-sm text-text-description">
            원하는 방식으로 향을 찾아보세요
          </p>
        </div>

        <div className="flex flex-col gap-md">
          <FindMethodOption
            icon={ClipboardPen}
            title="설문으로 찾기"
            onClick={() => navigate({ to: "/find-scent/survey" })}
            description={
              <>
                질문에 답하면서 나의 취향과
                <br />
                향의 방향을 차근차근 찾아가는 방식
              </>
            }
          />

          <FindMethodOption
            icon={Sparkles}
            title="키워드로 찾기"
            onClick={() => navigate({ to: "/find-scent/keyword" })}
            description={
              <>
                원하는 분위기와 향의 무드를
                <br />
                직접 선택해 빠르게 향을 찾아가는 방식
              </>
            }
          />
        </div>

        <button
          type="button"
          className="h-12 rounded-2xl font-bold text-primary transition-colors duration-200 hover:bg-green-input"
          onClick={onClose}
        >
          닫기
        </button>
      </div>
    </Modal>
  )
}

export default FindMethodModal
