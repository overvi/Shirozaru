import ResultSkeleton from "@/components/Search/Skeleton";
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Skeleton,
} from "@chakra-ui/react";

const SearchLoading = () => {
  return (
    <>
      <Flex
        direction="column"
        gap={10}
        px={3}
        maxW={{
          base: "20rem",
          sm: "28rem",
          md: "45rem",
          lg: "59rem",
          xl: "70rem",
        }}
        m="auto"
        py={45}
      >
        <FormControl mb={10}>
          <Skeleton width="25%">
            <FormLabel>Search Anime</FormLabel>
          </Skeleton>
          <Skeleton>
            <Input />
          </Skeleton>
        </FormControl>
        <ResultSkeleton />
      </Flex>
    </>
  );
};

export default SearchLoading;
