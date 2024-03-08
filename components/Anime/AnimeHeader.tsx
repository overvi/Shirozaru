import { useGetWatchList } from "@/hooks/useWatchList";
import { Box, Flex, Heading, Image as Pic, Tag, Text } from "@chakra-ui/react";
import { auth } from "@clerk/nextjs";
import { Anime } from "@prisma/client";
import Image from "next/image";
import BookMark from "../shared/BookMark";
import Link from "../shared/WatchButton";
import Collapse from "./Collapse";

const AnimeHeader = async ({ anime }: { anime: Anime }) => {
  const { userId } = auth();

  return (
    <>
      <Box className="relative">
        <Image
          className=" mt-8  rounded-md brightness-[.2] h-[12rem] object-cover"
          alt={anime.title}
          src={anime.banner}
          quality={100}
          width={2000}
          height={5}
        />
      </Box>
      <Box>
        <Flex gap={8} direction={["column", "column", "row"]}>
          <Box
            alignSelf="stretch"
            position="relative"
            display="flex"
            className=" after:blur-md w-fit "
            _after={{
              position: "absolute",
              content: `""`,
              inset: "0px",
              zIndex: "-1",
              background: "white",
              bgGradient: "linear(to-b, red.500 , black)",
            }}
          >
            <Pic w={250} className="rounded-xl" src={anime.poster} />
          </Box>

          <Box>
            <Flex gap={3} align="center">
              <Heading>{anime.title}</Heading>
            </Flex>
            <Flex direction="column" gap={5} mt={5}>
              <Flex justify="space-between">
                <Text color="gray.700">Sub | Dub</Text>
                <Tag colorScheme="red">episodes : {anime.episoden}</Tag>
              </Flex>
              <Flex justify="space-between">
                <Tag colorScheme="blue">studio : {anime.studio}</Tag>
                <Tag colorScheme="green">made : {anime.year_of_make}</Tag>
              </Flex>
            </Flex>
            <Collapse query={anime.description} />

            <Flex mt={10} gap={6}>
              <Link href={anime.id + "/watch"}>Start Watching</Link>
              {userId && <BookMark userId={userId} id={anime.id} />}
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AnimeHeader;
