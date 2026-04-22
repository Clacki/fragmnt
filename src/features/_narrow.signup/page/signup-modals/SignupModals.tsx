import SignupErrorModal from "./signup-error-modal/SignupErrorModal"
import SignupSuccessModal from "./signup-success-modal/SignupSuccessModal"

const SignupModals = () => {
  return (
    <>
      <SignupSuccessModal />
      <SignupErrorModal />
    </>
  )
}

export default SignupModals
