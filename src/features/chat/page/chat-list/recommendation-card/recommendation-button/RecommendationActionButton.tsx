import type { ButtonHTMLAttributes, PropsWithChildren } from "react"

type RecommendationActionButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement>
>

const RecommendationActionButton = ({
  children,
  className = "",
  ...props
}: RecommendationActionButtonProps) => {
  return (
    <button
      type="button"
      className={`h-8 w-full cursor-pointer rounded-md border border-border font-bold text-text-highlight hover:bg-green-input disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default RecommendationActionButton
