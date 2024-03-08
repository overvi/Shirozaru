"use client";

import { settings } from "@/config/CardsSlickSettings";
import {
  HStack,
  Box,
  useMediaQuery,
  Image,
  Text,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { Anime } from "@prisma/client";
import { useRouter } from "next/navigation";

import React from "react";

const AnimeRelated = ({ anime }: { anime: Anime[] }) => {
  const [x] = useMediaQuery("(min-width: 500px)");
  const naviage = useRouter();

  return (
    <Flex gap={5} direction="column">
      <Box
        mb={5}
        className="border px-5 w-fit  border-r-orange-400 border-t-red-400"
      >
        <Heading>You May Also Like</Heading>
      </Box>
      <Box as={HStack} {...settings} spacing={10}>
        {anime.slice(0, x ? 3 : 2).map((card) => (
          <Box
            key={card.id}
            onClick={() => naviage.push(card.id)}
            className="self-start hover:opacity-50 transition-opacity duration-500  cursor-pointer"
          >
            <Image
              height={300}
              borderRadius="6px"
              width={200}
              src={card?.poster!}
            />
            <Text maxW="200px" mt={3}>
              {card?.title}
            </Text>
          </Box>
        ))}
      </Box>
    </Flex>
  );
};

export default AnimeRelated;
