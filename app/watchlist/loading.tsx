import {
  Box,
  Container,
  Flex,
  SimpleGrid,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import data from "@/smaples/data.json";
import React from "react";

const WatchlistLoading = () => {
  return (
    <>
      <SimpleGrid
        as={Container}
        columns={[1, 2, 3, 4, 5]}
        gap={5}
        rowGap={10}
        maxW={["15rem", "35rem", "55rem", "65rem", "80rem"]}
        py={10}
      >
        {data.slice(0, 6).map((item, index) => (
          <Box maxW="230px" key={index}>
            <Skeleton h="402px" borderRadius="8px"></Skeleton>
            <Flex align="center" mt={3} justify="space-between">
              <SkeletonText w="30%" noOfLines={1} />
              <Skeleton w="32px" h="18px"></Skeleton>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export default WatchlistLoading;
