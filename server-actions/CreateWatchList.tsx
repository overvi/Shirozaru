"use server";
import prisma from "@/prisma/client";
import { revalidatePath } from "next/cache";

export async function createWatchList(userId: string, animeId: string) {
  const newWatchList = await prisma.watchList.upsert({
    where: { userId },
    create: {
      userId: userId,
    },
    update: {
      animes: {
        push: animeId,
      },
    },
  });

  revalidatePath(`/api/${userId}/watchlist`);

  return newWatchList;
}
