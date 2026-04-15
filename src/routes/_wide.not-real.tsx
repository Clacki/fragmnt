import NotRealPage from "@/features/_wide.not-real/page/NotRealPage"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_wide/not-real")({
  // NOTE: navigation bar 애니메이션 확인용 라우트입니다
  // TODO: Footer 제작할 때 해당 라우트 삭제하기
  component: NotRealPage,
})
