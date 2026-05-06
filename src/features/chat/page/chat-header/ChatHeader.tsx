import { BackButton } from "@/shared/components"

const ChatHeader = () => {
  return (
    <header className=" w-full flex items-center border-b border-border px-lg py-md gap-lg">
      <BackButton fallbackPath="/find-scent" mode="fallback" />
      <div>
        <h1 className="font-extrabold text-[20px]">대화로 향기 찾기</h1>
        <p className="font-light text-text-sub">
          원하는 분위기나 기분을 편하게 알려주세요
        </p>
      </div>
    </header>
  )
}

export default ChatHeader
