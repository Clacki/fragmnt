import { Button } from "@/shared/components"
import { useNavigate } from "@tanstack/react-router"

const NotRealPage = () => {
  const navigate = useNavigate()
  return (
    <div>
      this is to test navbar animation
      <Button onClick={() => navigate({ to: "/" })}>navigate to "/"</Button>
    </div>
  )
}

export default NotRealPage
