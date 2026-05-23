import { FullScreen } from "@/shared/components"
import { Toaster } from "@/shared/components/toast"
import { Outlet } from "@tanstack/react-router"

import "./root-layout.css"
const RootLayout = () => {
  return (
    <FullScreen className="root-layout relative bg-[#F6F5F1]">
      <div className="relative z-10">
        <Outlet />
      </div>

      <Toaster />
    </FullScreen>
  )
}

export default RootLayout
