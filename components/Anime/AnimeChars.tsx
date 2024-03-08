"use client";

import { AnimeChars as Anime } from "@/types/Anime";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";

const AnimeChars = ({ anime }: { anime: Anime }) => {
  const [x] = useMediaQuery("(min-width: 500px)");
  return (
    <>
      <Flex direction="column" gap={5}>
        <Box>
          <Heading>{anime.title}</Heading>
          <Text className="text-gray-400">Main Characters</Text>
        </Box>
        <Flex gap={7}>
          {anime.mainChars
            .slice(0, x ? anime.mainChars.length : 2)
            .map((character) => (
              <Box key={character.id}>
                <Image
                  height="26rem"
                  borderRadius="8px"
                  src={character.picture}
                />
                <Text mt={2}>{character.name}</Text>
              </Box>
            ))}
        </Flex>
      </Flex>
    </>
  );
};

export default AnimeChars;
