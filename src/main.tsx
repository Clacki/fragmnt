import { RouterProvider, createRouter } from "@tanstack/react-router"
import ReactDOM from "react-dom/client"

import "./index.css"
import { routeTree } from "./routeTree.gen"

const router = createRouter({
  routeTree,
})

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
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

    root.render(<RouterProvider router={router} />)
  })
}
