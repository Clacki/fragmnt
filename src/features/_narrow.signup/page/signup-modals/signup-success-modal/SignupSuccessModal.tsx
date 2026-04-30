import useSignupStore from "@/features/_narrow.signup/store/use-signup-store"
import { Modal } from "@/shared/components"
import ModalContent from "@/shared/components/modal-content/ModalContent"
import { useNavigate } from "@tanstack/react-router"

const SignupSuccessModal = () => {
  const modalKey = useSignupStore((state) => state.modalKey)
  const setModalKey = useSignupStore((state) => state.setModalKey)

  const navigate = useNavigate()

  const handleClick = () => {
    navigate({ to: "/login", search: { reason: undefined }, replace: true })
    setModalKey(null)
  }

  return (
    <Modal isOpen={modalKey === "success"} onClose={() => setModalKey(null)}>
      <ModalContent>
        <ModalContent.Title>회원가입이 완료되었습니다</ModalContent.Title>
        <ModalContent.ButtonSection>
          <ModalContent.Button
            type="button"
            onClick={handleClick}
            role="confirm"
          >
            로그인 페이지로 이동
          </ModalContent.Button>
        </ModalContent.ButtonSection>
      </ModalContent>
    </Modal>
  )
}

export default SignupSuccessModal
