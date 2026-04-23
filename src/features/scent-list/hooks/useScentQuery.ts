import { useQuery } from "@tanstack/react-query"
import { getScents } from "../api/get-scent.api"

export const useScentsQuery = () => {
  return useQuery({
    queryKey: ["scents"],
    queryFn: getScents,
  })
}
