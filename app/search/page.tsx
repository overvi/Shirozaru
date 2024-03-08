import SearchForm from "@/components/Search/SearchForm";
import SearchResults from "@/components/Search/SearchResults";
import prisma from "@/prisma/client";
import { Flex } from "@chakra-ui/react";
import { Metadata } from "next";

interface Props {
  searchParams: { search: string };
}

const Search = async ({ searchParams }: Props) => {
  const searchRes = await prisma.anime.findMany({
    where: {
      title: {
        contains: !searchParams.search
          ? ""
          : searchParams.search.charAt(0).toUpperCase() +
            searchParams.search.slice(1),
      },
    },
  });
  return (
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
      <SearchForm />
      <SearchResults res={searchRes} />
    </Flex>
  );
};

export const metadata: Metadata = {
  title: "Shirozaru   -search",
  description: "The searching page of Shirozaru",
};

export default Search;
