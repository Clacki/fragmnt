import { Toaster } from "@/shared/components/toast"
import { Outlet } from "@tanstack/react-router"

const RootLayout = () => {
  return (
    <div>
      <div>this is header placeholder</div>
      <Outlet />
      <Toaster />
    </div>
  )
}

export default RootLayout
