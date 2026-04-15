import { Toaster } from "@/shared/components/toast"
import { Outlet } from "@tanstack/react-router"

const RootLayout = () => {
  return (
    <>
      <Outlet />
      <Toaster />
    </>
  )
}

export default RootLayout
