import { QueryClientProvider, type QueryClient } from "@tanstack/react-query"
import { RouterProvider, createRouter } from "@tanstack/react-router"
import ReactDOM from "react-dom/client"

import "./index.css"
import { routeTree } from "./routeTree.gen"
import queryClient from "./shared/api/query-client"

const router = createRouter({
  routeTree,
  context: { queryClient },
  scrollToTopSelectors: ["#main-scrollable-area"],
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
  if (import.meta.env.VITE_API_MOCKING !== "enabled") {
    return
  }

  const { worker } = await import("./shared/mocks/browser")

  await worker.start({
    serviceWorker: {
      url: "/mockServiceWorker.js",
      options: {
        scope: "/",
        updateViaCache: "none",
      },
    },
    onUnhandledRequest(request, print) {
      const url = new URL(request.url)

      if (request.mode === "navigate") {
        return
      }

      if (request.destination === "document") {
        return
      }

      if (request.destination) {
        return
      }

      if (!url.pathname.startsWith("/api")) {
        return
      }

      print.warning()
    },
  })
}

const rootElement = document.getElementById("root")

if (!rootElement) {
  throw new Error("root element를 찾을 수 없어요.")
}

const renderApp = () => {
  if (rootElement.innerHTML) {
    return
  }

  const root = ReactDOM.createRoot(rootElement)

  root.render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

enableMocking()
  .catch((error) => {
    console.error("MSW 실행 중 문제가 발생했어요.", error)
  })
  .finally(renderApp)
