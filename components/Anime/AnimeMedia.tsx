import { Flex, Heading, Box, Text } from "@chakra-ui/react";
import { Anime } from "@prisma/client";

import React, { Suspense } from "react";
import VideoComponent from "../Home/tabs/VideoComponent";

const AnimeMedia = ({ anime }: { anime: Anime }) => {
  return (
    <Flex gap={5} direction="column">
      <Box>
        <Heading>{anime.title}</Heading>
        <Text className="text-gray-400">Trailer & Opening</Text>
      </Box>

      <Suspense fallback={<p>Loading</p>}>
        {anime.trailer.includes("youtube") ? (
          <iframe
            height="315"
            src={anime.trailer}
            title="YouTube video player"
            allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-xl w-full sm:w-[65%] md:w-[45%]"
          ></iframe>
        ) : (
          <VideoComponent
            className="w-full sm:w-[65%] md:w-[45%]"
            src={anime.trailer}
          />
        )}
      </Suspense>
    </Flex>
  );
};

export default AnimeMedia;
