import BotIcon from "@/assets/images/chat-bot/fragmnt-favicon.svg"
import clsx from "clsx"
import type { ChatMessage } from "../../../types/message.types"

type TextMessage = Extract<ChatMessage, { type: "text" }>
type MessageBubbleProps = Pick<TextMessage, "role" | "text">

const MessageBubble = ({ role, text }: MessageBubbleProps) => {
  const isAssistant = role === "assistant"

  return (
    <div
      className={clsx("message-enter flex w-full", {
        "justify-end": role === "user",
        "justify-start": isAssistant,
      })}
    >
      <div className="flex max-w-[80%] items-start gap-sm">
        {isAssistant && (
          <div className="flex h-8 w-8 shrink-0 items-center justify-center pt-xs">
            <img src={BotIcon} alt="fragmnt bot" className="h-8 w-8" />
          </div>
        )}

        <div
          className={clsx(
            "whitespace-pre-line rounded-2xl px-md py-sm text-md leading-[150%]",
            {
              "bg-primary text-white": role === "user",
              "border border-border bg-white text-text-primary": isAssistant,
            }
          )}
        >
          {text}
        </div>
      </div>
    </div>
  )
}

export default MessageBubble
