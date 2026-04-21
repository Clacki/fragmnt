import mainLoaderFn from "@/features/_wide.index/loader/main-loader"
import MainPage from "@/features/_wide.index/page/MainPage"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_wide/")({
  component: MainPage,
  loader: ({ context: { queryClient } }) => mainLoaderFn(queryClient),
})
