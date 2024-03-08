import {
  Container,
  Flex,
  Skeleton,
  SkeletonText,
  VStack,
} from "@chakra-ui/react";

const AnimeLoading = () => {
  return (
    <>
      <Container maxW="78rem" py={5} as={VStack} align="start" spacing={20}>
        <Skeleton w="1200px" height="200px" className="rounded-md" />
        <Flex gap={9} direction={["column", "column", "row"]}>
          <Skeleton borderRadius="10px" w="250px" h="373px"></Skeleton>
          <VStack align="start" spacing={8} minW="35rem">
            <Skeleton w="244px" h="44px" />
            <Skeleton w="73px" h="24px"></Skeleton>
            <Skeleton w="93px" h="24px"></Skeleton>
            <SkeletonText w="100%" noOfLines={3} skeletonHeight="4" />
            <Flex gap={8}>
              <Skeleton w="203px" h="40px" />
              <Skeleton w="40px" h="40px" />
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </>
  );
};

export default AnimeLoading;
