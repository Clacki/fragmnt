import useSignupStore from "@/features/_narrow.signup/store/use-signup-store"
import { Button, Modal } from "@/shared/components"
import { useNavigate } from "@tanstack/react-router"

const SignupSuccessModal = () => {
  const modalKey = useSignupStore((state) => state.modalKey)
  const setModalKey = useSignupStore((state) => state.setModalKey)

  const navigate = useNavigate()

  const handleClick = () => {
    navigate({ to: "/login", replace: true })
    setModalKey(null)
  }

  return (
    <Modal isOpen={modalKey === "success"} onClose={() => setModalKey(null)}>
      <p>성공: 내용물은 다음 이슈에서 채우겠습니다</p>
      <Button type="button" onClick={handleClick}>
        로그인 페이지로 이동
      </Button>
    </Modal>
  )
}

export default SignupSuccessModal
