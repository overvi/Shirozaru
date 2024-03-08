import { Skeleton, Box, Heading, Text, Flex } from "@chakra-ui/react";
import data from "@/smaples/cards.json";
import React from "react";

const CardSkeleton = () => {
  const datas = [1, 2, 3, 4, 5];
  return (
    <Box className="space-y-10">
      <Box className="space-y-4">
        <Skeleton w="fit-content">
          <Heading size={["md", "md", "xl"]}>{data[0].title}</Heading>
        </Skeleton>
        <Skeleton w="fit-content">
          <Text color="gray.500">{data[0].description}</Text>
        </Skeleton>
      </Box>
      <Flex>
        {datas.map((dat, index) => (
          <Box key={dat} pr={5}>
            <Skeleton borderRadius="5px" h="368px" w="220px"></Skeleton>
            <Flex mt={6} justify="space-between" align="center">
              <Skeleton w="125px" h="15px" />
              <Skeleton w="50px" height="15px" />
            </Flex>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default CardSkeleton;
