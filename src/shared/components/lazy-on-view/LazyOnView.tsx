import { useEffect, useRef, useState, type ReactNode } from "react"

type LazyOnViewProps = {
  children: ReactNode
  rootMargin?: string
  fallback?: ReactNode
}

const LazyOnView = ({
  children,
  rootMargin = "200px",
  fallback = null,
}: LazyOnViewProps) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const target = ref.current

    if (!target) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return
        }

        setIsVisible(true)
        observer.disconnect()
      },
      {
        rootMargin,
      }
    )

    observer.observe(target)

    return () => {
      observer.disconnect()
    }
  }, [rootMargin])

  return <div ref={ref}>{isVisible ? children : fallback}</div>
}

export default LazyOnView
