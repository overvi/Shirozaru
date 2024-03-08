"use client";

import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const SearchForm = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  return (
    <FormControl mb={10}>
      <FormLabel>Search Anime</FormLabel>
      <Input
        onChange={(t) =>
          router.push(
            pathname + "?" + createQueryString("search", t.target.value)
          )
        }
        type="text"
      />
    </FormControl>
  );
};

export default SearchForm;
