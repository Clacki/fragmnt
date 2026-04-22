import BotIcon from "@/assets/images/chat-bot/fragmnt-favicon.svg"

const TypingBubble = () => {
  return (
    <div className="message-enter flex w-full justify-start">
      <div className="flex max-w-[80%] items-start gap-sm">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center pt-xs">
          <img src={BotIcon} alt="fragmnt bot" className="h-8 w-8" />
        </div>

        <div className="flex items-center gap-1 rounded-2xl border border-border bg-white px-md py-sm">
          <span className="h-2 w-2 animate-bounce rounded-full bg-text-primary" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-text-primary [animation-delay:0.15s]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-text-primary [animation-delay:0.3s]" />
        </div>
      </div>
    </div>
  )
}

export default TypingBubble
