import { useState } from "react"
import { PuffLoader } from "react-spinners"

type LoadingStateProps = {
  loading?: boolean
  message?: string
}

const loadingMessages = [
  "향기 정보를 불러오고 있어요.",
  "어울리는 향을 찾고 있어요.",
  "향기 노트를 정리하고 있어요.",
  "당신의 취향을 담아오는 중이에요.",
  "취향에 맞는 향을 고르고 있어요.",
]

const getRandomMessage = () => {
  const randomIndex = Math.floor(Math.random() * loadingMessages.length)

  return loadingMessages[randomIndex]
}

const LoadingState = ({ loading = true, message }: LoadingStateProps) => {
  const [randomMessage] = useState(getRandomMessage)

  if (!loading) {
    return null
  }

  return (
    <div className="flex flex-col items-center justify-center gap-md py-2xl">
      <PuffLoader size={60} color="var(--color-button)" aria-label="로딩 중" />
      <p className="text-sm text-text-sub">{message ?? randomMessage}</p>
    </div>
  )
}

export default LoadingState
