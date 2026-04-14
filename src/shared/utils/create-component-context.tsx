import { createContext, useContext, type ReactNode } from "react"

/**
 * 합성 컴포넌트(compound component) 패턴을 사용하여, 부모의 속성을 자식에게 넘길 때 사용합니다.
 * export 되는 게 컴포넌트는 아니라 파일명은 케밥 케이스를 사용했습니다
 */

const createComponentContext = <T,>() => {
  const ComponentContext = createContext<T | null>(null)

  const useComponentContext = () => {
    const context = useContext(ComponentContext)
    if (!context) throw new Error("콘텍스트가 없어요!")
    return context
  }

  type ComponentContextProviderProps = {
    value: T
    children: ReactNode
  }
  const ComponentContextProvider = ({
    value,
    children,
  }: ComponentContextProviderProps) => {
    return (
      <ComponentContext.Provider value={value}>
        {children}
      </ComponentContext.Provider>
    )
  }

  return { useComponentContext, ComponentContextProvider }
}

export { createComponentContext }
