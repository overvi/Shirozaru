import AnimeChars from "@/components/Anime/AnimeChars";
import AnimeHeader from "@/components/Anime/AnimeHeader";
import AnimeMedia from "@/components/Anime/AnimeMedia";
import AnimeRelated from "@/components/Anime/AnimeRelated";

import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import { cache } from "react";

interface Props {
  params: { animename: string };
}

const fetchAnime = cache((animeId: string) =>
  prisma.anime.findUnique({ where: { id: animeId } })
);

const Anime = async ({ params }: Props) => {
  const animes = await prisma.anime.findMany();
  if (!animes.map((z) => z.id).includes(params.animename)) notFound();

  const anime = await prisma.anime.findFirst({
    where: {
      id: params.animename,
    },
    include: {
      mainChars: true,
    },
  });

  if (!anime) notFound();

  const relevants = await prisma.anime.findMany({
    where: { id: { in: anime?.relevant } },
  });

  return (
    <div className="max-w-[78rem] m-auto px-5 space-y-[10rem]">
      <AnimeHeader anime={anime} />

      <AnimeChars anime={anime} />
      <AnimeMedia anime={anime} />
      <AnimeRelated anime={relevants} />
    </div>
  );
};

export async function generateMetadata({ params }: Props) {
  const animes = await prisma.anime.findMany();
  if (!animes.map((z) => z.id).includes(params.animename)) notFound();

  const anime = await fetchAnime(params.animename);

  return {
    title: anime?.title,
    description: "Details of anime" + anime?.id,
  };
}

export default Anime;
