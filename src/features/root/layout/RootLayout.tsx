import { Outlet } from "@tanstack/react-router"

const RootLayout = () => {
  return (
    <div>
      <div>this is header placeholder</div>
      <Outlet />
    </div>
  )
}

export default RootLayout
