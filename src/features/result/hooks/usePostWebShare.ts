import { useMutation } from "@tanstack/react-query"
import { postWebShare } from "../api/web-shared.api"

export const usePostWebShare = () => {
  return useMutation({
    mutationFn: postWebShare,
  })
}
