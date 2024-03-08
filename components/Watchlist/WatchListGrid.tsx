"use client";

import { Container, SimpleGrid } from "@chakra-ui/react";
import { Anime } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import AnimeCard from "../shared/AnimeCard";

const WatchListGrid = ({ anime }: { anime: Anime[] }) => {
  const router = useRouter();

  useEffect(() => {
    if (!anime.length) {
      // Redirect to another route if watchlist is empty
      router.push("/"); // Redirect to homepage
    }
  }, []);

  return (
    <SimpleGrid
      as={Container}
      columns={[1, 2, 3, 4, 5]}
      gap={5}
      rowGap={10}
      maxW={["15rem", "35rem", "55rem", "65rem", "80rem"]}
      py={10}
    >
      {anime.map((card) => (
        <AnimeCard key={card.id} card={card!} />
      ))}
    </SimpleGrid>
  );
};

export default WatchListGrid;
