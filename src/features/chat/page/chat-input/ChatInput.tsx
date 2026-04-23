import { Send } from "lucide-react"
import { useState, type ChangeEvent, type KeyboardEvent } from "react"

type ChatInputProps = {
  disabled?: boolean
  onSendMessage: (text: string) => void
}

const ChatInput = ({ onSendMessage }: ChatInputProps) => {
  const [inputValue, setInputValue] = useState("")

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleSend = () => {
    const trimmedValue = inputValue.trim()

    if (!trimmedValue) {
      return
    }

    onSendMessage(trimmedValue)
    setInputValue("")
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSend()
    }
  }

  return (
    <section className="flex gap-md border-t border-border p-lg">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="w-full rounded-md border border-border bg-green-input px-lg outline-none transition-colors focus:border-text-primary"
        placeholder="메세지를 입력해주세요"
      />
      <button
        type="button"
        onClick={handleSend}
        className="flex h-10 w-11 items-center justify-center rounded-md bg-primary text-white"
      >
        <Send size={18} />
      </button>
    </section>
  )
}

export default ChatInput
