const checkEnvVar = (envVar: string | undefined) => {
  if (!envVar) {
    throw new Error("---- MISSING ENV VAR")
  }

  return envVar
}

// NOTE: 호출해야 하는 환경변수는 모두 여기서 점검을 한 뒤, export 합니다
// NOTE: 각 페이지에서는 환경 변수를 직접 import 하지 않고 여기서 확인된 것만 import 해주시면 감사하겠습니다
// NOTE: 이는 배포 등 다른 환경에서 환경변수가 없어 생기는 오류를 빠르게 확인하기 위함입니다
export const BASE_URL = checkEnvVar(import.meta.env.VITE_BASE_URL)

export const IS_DEMO_MODE = import.meta.env.VITE_API_MOCKING === "enabled"
