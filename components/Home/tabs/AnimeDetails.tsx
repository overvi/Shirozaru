import BookMark from "@/components/shared/BookMark";
import Link from "@/components/shared/WatchButton";
import { Badge, Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import { Anime, WatchList } from "@prisma/client";
import "next-cloudinary/dist/cld-video-player.css";
import dynamic from "next/dynamic";

const VideoComponent = dynamic(() => import("./VideoComponent"), {
  ssr: false,
});

interface Props {
  data: Anime;
  userId: string | null;
}
const AnimeDetails = ({ data, userId }: Props) => {
  return (
    <>
      <Flex
        cursor="pointer"
        className="!flex gap-16 items-center"
        direction={{ base: "column", md: "row" }}
      >
        <VideoComponent src={data?.trailer || ""} />

        <Divider m={2} display={{ base: "block", md: "none" }} />
        <Box className="space-y-5 basis-1/2">
          <Heading>{data.title}</Heading>
          <Flex justify="space-between" align="center">
            <Text color="gray.500">{data.episoden} episodes</Text>
            <Badge colorScheme="green">{data?.rating}</Badge>
          </Flex>
          <Text display={["block", "block", "none", "block"]}>
            {data?.description}
          </Text>
          <Flex direction={{ base: "column", lg: "row" }} gap={5}>
            <Link href={data.id}>Start Watching</Link>
            {userId && <BookMark id={data.id} userId={userId} />}
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default AnimeDetails;
