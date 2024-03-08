import data from "@/smaples/data.json";
import {
  Badge,
  Box,
  Button,
  Flex,
  Image,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import { IoPlay } from "react-icons/io5";

const ResultSkeleton = () => {
  return (
    <>
      {data.slice(0, 3).map((anime, index) => (
        <Flex
          key={index}
          gap={5}
          mb={10}
          direction={{ base: "column", sm: "row" }}
          align="center"
        >
          <Skeleton borderRadius="10px">
            <Image
              width={{ base: "150px", sm: "350px", md: "500px" }}
              src={anime?.poster!}
            />
          </Skeleton>

          <Flex
            w={["auto", "100vw"]}
            direction="column"
            gap={10}
            alignSelf="center"
          >
            <SkeletonText noOfLines={1} w={{ xl: "25%" }} skeletonHeight="7" />

            <SkeletonText
              display={{ base: "none", md: "block" }}
              skeletonHeight="4"
              noOfLines={3}
              w="100%"
            />
            <Box display="flex" gap={5}>
              <Skeleton>
                <Badge colorScheme="teal">rating {anime?.rating}</Badge>
              </Skeleton>
              <Skeleton>
                <Badge ml={3} colorScheme="red">
                  eopisodes {anime?.episodes}
                </Badge>
              </Skeleton>
            </Box>
            <Skeleton alignSelf="start">
              <Button
                display="block"
                px={8}
                variant="outline"
                fontWeight="300"
                colorScheme="yellow"
                leftIcon={<IoPlay />}
              >
                Watch S1 EP1
              </Button>
            </Skeleton>
          </Flex>
        </Flex>
      ))}
    </>
  );
};

export default ResultSkeleton;
