export const ERROR_CODE_TO_MESSAGE = {
  USER_ALREADY_EXISTS: "이미 가입된 이메일 혹은 전화번호입니다",
  INVALID_EMAIL_FORMAT: "이메일 형식이 올바르지 않습니다",
  INVALID_PHONE_FORMAT: "전화번호 형식이 올바르지 않습니다",
  VALIDATION_ERROR: "입력값이 유효하지 않습니다", //NOTE:	일반적인 필드 검증 실패
  NOT_AUTHENTICATED: "로그인이 필요합니다",
  AUTHENTICATION_FAILED: "아이디 혹은 비밀번호가 잘못 입력되었습니다",
  NOT_FOUND: "요청하신 것을 찾을 수 없습니다",
} as const
