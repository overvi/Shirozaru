import { Flex, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

import BookMark from "@/components/shared/BookMark";

import { auth } from "@clerk/nextjs";
import Link from "@/components/shared/WatchButton";
import { Anime } from "@prisma/client";

interface Props {
  data: Anime;
}

const HeaderContent = async ({ data }: Props) => {
  const { userId } = auth();

  return (
    <>
      <Stack
        zIndex={2}
        className="flex md:block items-center md:items-start"
        p={20}
        position="absolute"
        spacing={5}
        color="#fff"
      >
        <Image width={250} height={1} src={data.logo!} alt="logo" />

        <Text
          display={["none", "none", "block"]}
          maxW="45ch"
          fontWeight="400"
          fontSize="1.1rem"
        >
          {data.description}
        </Text>
        <Flex gap={3}>
          {data?.genres!.map((genre, index) => (
            <Text key={genre} fontFamily={"cursive"} color="gray.500">
              {genre}
            </Text>
          ))}
        </Flex>
        <Flex gap={3}>
          <Link href={data.id + "/watch"}>Watch S1 EP1</Link>
          {userId && <BookMark id={data.id} userId={userId} />}
        </Flex>
      </Stack>
    </>
  );
};

export default HeaderContent;
