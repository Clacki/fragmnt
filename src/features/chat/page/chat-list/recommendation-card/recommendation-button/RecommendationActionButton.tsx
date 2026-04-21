type RecommendationActionButtonProps = {
  children: React.ReactNode
  onClick?: () => void
}

const RecommendationActionButton = ({
  children,
  onClick,
}: RecommendationActionButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="h-8 w-full cursor-pointer rounded-md border border-border font-bold text-text-highlight hover:bg-green-input"
    >
      {children}
    </button>
  )
}

export default RecommendationActionButton
