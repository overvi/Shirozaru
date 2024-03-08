import WatchListGrid from "@/components/Watchlist/WatchListGrid";
import prisma from "@/prisma/client";
import { auth } from "@clerk/nextjs";
import { Metadata } from "next";

const WatchList = async () => {
  const { userId } = auth();
  if (!userId) return;

  const watchlist = await prisma.watchList.findUnique({
    where: { userId },
  });

  const animes = await prisma.anime.findMany({
    where: { id: { in: watchlist?.animes } },
  });

  return <WatchListGrid anime={animes} />;
};

export const metadata: Metadata = {
  title: "Shirozaru    -watchlist",
  description: "The watchlist page of Shirozaru",
};

export default WatchList;
