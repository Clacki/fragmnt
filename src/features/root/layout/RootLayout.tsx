import Footer from "@/features/_wide/layout/footer/Footer"
import Header from "@/features/_wide/layout/header/Header"
import { Toaster } from "@/shared/components/toast"
import { Outlet } from "@tanstack/react-router"

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Toaster />
      <Footer />
    </>
  )
}

export default RootLayout
