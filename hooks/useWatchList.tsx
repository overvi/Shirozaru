import { WatchList } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetWatchList = (userId: string | null) => {
  return useQuery({
    queryKey: ["watchlist"],
    queryFn: () =>
      axios.get<WatchList>(`api/${userId}/watchlist`).then((res) => res.data),
  });
};
