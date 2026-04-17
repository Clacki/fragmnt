import BgMainSrc from "@/assets/images/root/bg.main.png"
import BgAuthSrc from "@/assets/images/root/placeholder.auth.png"
import BgFindScent from "@/assets/images/root/placeholder.findscent.png"
import BgMypage from "@/assets/images/root/placeholder.mypage.png"
import { FullScreen } from "@/shared/components"
import { Toaster } from "@/shared/components/toast"
import { Outlet, useLocation } from "@tanstack/react-router"

const selectImageSrc = (pathname: string) => {
  if (pathname.includes("auth")) return BgAuthSrc // TODO: need to replace
  if (pathname.includes("find-scent")) return BgFindScent // TODO: need to replace
  if (pathname.includes("my-page")) return BgMypage // TODO: need to replace
  // TODO: need to handle "list" page
  return BgMainSrc
}

const RootLayout = () => {
  const pathname = useLocation().pathname

  const imageSrc = selectImageSrc(pathname)

  return (
    <FullScreen>
      <img
        src={imageSrc}
        alt="배경 이미지"
        className="-z-1 fixed inset-0 opacity-40 size-full object-cover"
      />

      <Outlet />
      <Toaster />
    </FullScreen>
  )
}

export default RootLayout
