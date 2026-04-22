import useSignupStore from "@/features/_narrow.signup/store/use-signup-store"
import { Button, Modal } from "@/shared/components"

const SignupErrorModal = () => {
  const modalKey = useSignupStore((state) => state.modalKey)
  const setModalKey = useSignupStore((state) => state.setModalKey)

  return (
    <Modal isOpen={modalKey === "error"} onClose={() => setModalKey(null)}>
      <p>에러 발생: 내용물은 다음에 채우겠습니다</p>
      <Button onClick={() => setModalKey(null)}>닫기</Button>
    </Modal>
  )
}

export default SignupErrorModal
