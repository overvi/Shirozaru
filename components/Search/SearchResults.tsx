import {
  Badge,
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { Anime } from "@prisma/client";
import Link from "../shared/WatchButton";
import NothingFound from "./NothingFound";

const SearchResults = ({ res }: { res: Anime[] }) => {
  if (!res.length) return <NothingFound />;

  return (
    <>
      {res
        ?.filter((x) => x?.poster)
        .slice(0, 3)
        .map((anime) => (
          <Box key={anime?.id}>
            <Flex
              textAlign={{ base: "center", sm: "unset" }}
              gap={5}
              mb={10}
              direction={{ base: "column", sm: "row" }}
              align="center"
            >
              <Image
                borderRadius="10px"
                width={{ base: "150px", md: "300px" }}
                src={anime?.poster!}
              />

              <Flex direction="column" gap={5} alignSelf="center">
                <Heading mb={5}>{anime?.title}</Heading>
                <Text display={{ base: "none", md: "block" }}>
                  {anime?.description}
                </Text>
                <Box>
                  <Badge colorScheme="teal">rating {anime?.rating}</Badge>
                  <Badge ml={3} colorScheme="red">
                    eopisodes {anime?.episoden}
                  </Badge>
                </Box>
                <Link className="self-center xs:self-start" href={anime.id}>
                  Watch S1 EP1
                </Link>
              </Flex>
            </Flex>
            <Divider />
          </Box>
        ))}
    </>
  );
};

export default SearchResults;
