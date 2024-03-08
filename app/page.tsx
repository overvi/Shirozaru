import CarouselCard from "@/components/Home/cards/CarouselCard";
import FunFact from "@/components/Home/fun-fact/FunFact";
import Header from "@/components/Home/header/HeaderBase";
import GenreTabs from "@/components/Home/tabs/GenreTabs";
import prisma from "@/prisma/client";
import { Container } from "@chakra-ui/react";
import { Metadata } from "next";

export default async function Home() {
  const anime = await prisma.anime.findMany({
    include: {
      coverImage: true,
    },
  });

  return (
    <>
      <Header headers={anime.filter((x) => x.coverImage)} />
      <Container maxW="80rem" _light={{ mt: 10 }} className="space-y-32">
        <CarouselCard cards={anime} />
        <GenreTabs tabs={anime} />
        <FunFact />
      </Container>
    </>
  );
}

export const metadata: Metadata = {
  title: "Shirozaru",
  description: "The home page of Shirozaru",
};
