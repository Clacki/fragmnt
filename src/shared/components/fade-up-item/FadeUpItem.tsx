import clsx from "clsx"

type FadeUpItemProps = {
  isReady: boolean
  delay?: number
  children: React.ReactNode
  className?: string
}

const FadeUpItem = ({
  isReady,
  delay = 0,
  children,
  className,
}: FadeUpItemProps) => {
  return (
    <div
      className={clsx(isReady ? "fade-up opacity-0" : "opacity-0", className)}
      style={isReady ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}

export default FadeUpItem
