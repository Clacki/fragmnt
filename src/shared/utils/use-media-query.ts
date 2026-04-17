import { useEffect, useState } from "react"

// NOTE: default tailwind breakpoint sm (640px)
// NOTE:  tailwind breakpoint md (768px)
const useMediaQuery = (threshhold: number = 640) => {
  const query = `(min-width: ${threshhold}px)`
  const [isWide, setIsWide] = useState(() => window.matchMedia(query).matches)

  useEffect(() => {
    const mediaQuery = window.matchMedia(query)
    const handler = (event: MediaQueryListEvent) => {
      setIsWide(event.matches)
    }

    mediaQuery.addEventListener("change", handler)
    return () => mediaQuery.removeEventListener("change", handler)
  }, [query])

  return { isWide }
}

export { useMediaQuery }
