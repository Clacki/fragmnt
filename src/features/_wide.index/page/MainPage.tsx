import { Button } from "@/shared/components"
import { useNavigate } from "@tanstack/react-router"

const MainPage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <p>this is main page placeholder</p>
      <Button onClick={() => navigate({ to: "/not-real" })}>
        navigate to "not-real" page
      </Button>
    </div>
  )
}

export default MainPage
