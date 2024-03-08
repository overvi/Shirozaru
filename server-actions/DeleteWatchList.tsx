"use server";
import prisma from "@/prisma/client";
import { revalidatePath } from "next/cache";

export async function deleteWatchList(userId: string, animeId: string) {
  const prev = await prisma.watchList.findUnique({
    where: { userId: userId },
  });

  const pure = prev?.animes.filter((anime) => anime !== animeId);

  if (!pure) return;

  const current = await prisma.watchList.update({
    where: { userId },
    data: {
      animes: {
        set: pure,
      },
    },
  });

  revalidatePath(`/api/${userId}/watchlist`);

  return current;
}
