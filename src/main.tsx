import { RouterProvider, createRouter } from "@tanstack/react-router"
import ReactDOM from "react-dom/client"

import { QueryClientProvider, type QueryClient } from "@tanstack/react-query"
import "./index.css"
import { routeTree } from "./routeTree.gen"
import queryClient from "./shared/api/query-client"

const router = createRouter({
  routeTree,
  context: { queryClient },
})

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

// NOTE: context에서 꺼내는 route마다 이 타입을 제네릭 자리에 넣어야 함
export type RouterContext = {
  queryClient: QueryClient
}

const enableMocking = async () => {
  if (import.meta.env.DEV && import.meta.env.VITE_ENABLE_MSW === "true") {
    const { worker } = await import("./shared/mocks/browser")

    await worker.start({
      onUnhandledRequest: "bypass",
    })
  }
}

const rootElement = document.getElementById("root")

if (!rootElement) {
  throw new Error("root element를 찾을 수 없어요.")
}

if (!rootElement.innerHTML) {
  enableMocking().then(() => {
    const root = ReactDOM.createRoot(rootElement)

    root.render(
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    )
  })
}
