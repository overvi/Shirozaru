import AnimeVideo from "@/components/Watch/AnimeVideo";
import prisma from "@/prisma/client";
import { Container, Heading } from "@chakra-ui/react";
import { notFound } from "next/navigation";
import React, { cache } from "react";

interface Props {
  params: { animename: string };
}

const fetchAnime = cache((animeId: string) =>
  prisma.anime.findUnique({ where: { id: animeId } })
);

const AnimeWatch = async ({ params }: Props) => {
  const animes = await prisma.anime.findMany();
  if (!animes.map((z) => z.id).includes(params.animename)) notFound();

  const anime = await prisma.anime.findUnique({
    where: { id: params.animename },
    include: {
      episodes: true,
    },
  });

  if (!anime) notFound();
  return (
    <Container maxW="77rem" py={5}>
      <Heading py={5}>
        {anime.title} : {anime.episodes[0].title}
      </Heading>
      <AnimeVideo src={anime.episodes[0].src} />
    </Container>
  );
};

export async function generateMetadata({ params }: Props) {
  const animes = await prisma.anime.findMany();
  if (!animes.map((z) => z.id).includes(params.animename)) notFound();
  const anime = await fetchAnime(params.animename);

  return {
    title: anime?.title + "   -watch",
    description: "Details of anime" + anime?.id,
  };
}

export default AnimeWatch;
