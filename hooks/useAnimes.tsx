import { Anime } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetAnimes = () => {
  return useQuery({
    queryKey: ["animes"],
    queryFn: () => axios.get<Anime[]>("api/animes").then((res) => res.data),
  });
};
