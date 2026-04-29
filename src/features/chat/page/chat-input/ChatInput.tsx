import { Send } from "lucide-react"
import {
  useState,
  type ChangeEvent,
  type CompositionEvent,
  type KeyboardEvent,
} from "react"

type ChatInputProps = {
  disabled?: boolean
  onSendMessage: (text: string) => void
}

const ChatInput = ({ disabled = false, onSendMessage }: ChatInputProps) => {
  const [inputValue, setInputValue] = useState("")
  const [isComposing, setIsComposing] = useState(false)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleCompositionStart = () => {
    setIsComposing(true)
  }

  const handleCompositionEnd = (event: CompositionEvent<HTMLInputElement>) => {
    setIsComposing(false)
    setInputValue(event.currentTarget.value)
  }

  const handleSend = () => {
    const trimmedValue = inputValue.trim()

    if (!trimmedValue || disabled) {
      return
    }

    onSendMessage(trimmedValue)
    setInputValue("")
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (isComposing || event.nativeEvent.isComposing) {
      return
    }

    if (event.key === "Enter") {
      event.preventDefault()
      handleSend()
    }
  }

  return (
    <section className="flex gap-md border-t border-border p-lg">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onCompositionStart={handleCompositionStart}
        onCompositionEnd={handleCompositionEnd}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        className="w-full rounded-md border border-border bg-green-input px-lg outline-none transition-colors focus:border-text-primary disabled:cursor-not-allowed disabled:opacity-60"
        placeholder="메세지를 입력해주세요"
      />

      <button
        type="button"
        onClick={handleSend}
        disabled={disabled}
        className="flex h-10 w-11 items-center justify-center rounded-md bg-primary text-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Send size={18} />
      </button>
    </section>
  )
}

export default ChatInput
