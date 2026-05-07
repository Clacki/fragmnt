import BgMainSrc from "@/assets/images/root/bg.main4.jpg"
import { FullScreen } from "@/shared/components"
import { Toaster } from "@/shared/components/toast"
import { Outlet } from "@tanstack/react-router"

const RootLayout = () => {
  return (
    <FullScreen className="relative bg-[#F6F5F1]">
      <img
        src={BgMainSrc}
        alt=""
        aria-hidden="true"
        className="fixed inset-0 z-0 size-full object-cover opacity-40"
      />

      <div className="relative z-10">
        <Outlet />
      </div>

      <Toaster />
    </FullScreen>
  )
}

export default RootLayout
