import { findEmailHandlers } from "@/features/_narrow.find-email/mocks/handlers"
import { findPasswordHandlers } from "@/features/_narrow.find-password/mocks/handlers"
import { authHandlers } from "@/features/_narrow.login/mocks/handlers"
import { mainPageHandlers } from "@/features/_wide.index/mocks/main-page-handler"
import { chatbotHandlers } from "@/features/chat/mocks/handlers"
import { keywordHandlers } from "@/features/keyword/mocks/handlers"
import { myPageHandlers } from "@/features/my-page/mocks/handlers"
import { photoHandlers } from "@/features/photo/mocks/handlers"
import { resultHandlers } from "@/features/result/mock/handlers"
import { detailPageHandlers } from "@/features/scent-detail/mocks/handler"
import { scentHandlers } from "@/features/scent-list/mocks/handlers"
import { surveyHandlers } from "@/features/survey/mocks/handlers"
import { webSharedHandlers } from "@/features/web-shared/mocks/handlers"
import { accountHandlers } from "./account-handlers"

export const handlers = [
  ...resultHandlers,
  ...myPageHandlers,
  ...scentHandlers,
  ...detailPageHandlers,
  ...mainPageHandlers,
  ...surveyHandlers,
  ...keywordHandlers,
  ...authHandlers,
  ...accountHandlers,
  ...photoHandlers,
  ...chatbotHandlers,
  ...findEmailHandlers,
  ...findPasswordHandlers,
  ...webSharedHandlers,
]
