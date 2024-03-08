import data from "@/smaples/data.json";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  Skeleton,
  SkeletonText,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CiBookmarkPlus } from "react-icons/ci";
import { IoPlay } from "react-icons/io5";

const HeaderSkeleton = () => {
  return (
    <>
      <Box
        cursor="grab"
        display="flex"
        alignItems="center"
        justifyContent={["center", "center", "start"]}
        px={["0", "5rem"]}
        className={`size-full  relative header  min-h-screen bg-no-repeat bg-cover`}
      >
        <Stack
          className="flex md:block items-center md:items-start"
          spacing={5}
          color="#fff"
        >
          <Skeleton>
            <Image width={250} src={data[0].logo} />
          </Skeleton>

          <SkeletonText
            display={["none", "none", "block"]}
            w="180%"
            mt="4"
            mb="4"
            noOfLines={5}
            spacing="3"
            skeletonHeight="6"
          />

          <Flex gap={3}>
            {data[0].genres!.map((genre, index) => (
              <Skeleton key={genre}>
                <Text fontFamily={"cursive"} color="gray.500">
                  {genre}
                  {index !== 2 && " |"}
                </Text>
              </Skeleton>
            ))}
          </Flex>
          <Flex gap={3}>
            <Skeleton borderRadius="7px">
              <Button
                w="min-content"
                display="block"
                px={8}
                fontWeight="300"
                colorScheme="yellow"
                leftIcon={<IoPlay />}
              >
                Watch S1 EP1
              </Button>
            </Skeleton>
            <Skeleton
              borderRadius="3px"
              display={{ base: "none", md: "block" }}
            >
              <IconButton
                variant="none"
                p={0}
                aria-label="bookmark"
                icon={<CiBookmarkPlus color="orange" size="35" />}
              />
            </Skeleton>
          </Flex>
        </Stack>
      </Box>
    </>
  );
};

export default HeaderSkeleton;
