"use client";

import IconButton from "@/customs/IconButton";
import { useGetAnimes } from "@/hooks/useAnimes";
import { useGetWatchList } from "@/hooks/useWatchList";
import { createWatchList } from "@/server-actions/CreateWatchList";
import { deleteWatchList } from "@/server-actions/DeleteWatchList";

import { Spinner, useToast } from "@chakra-ui/react";
import { Anime, WatchList } from "@prisma/client";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import { MdBookmarkAdd, MdBookmarkAdded } from "react-icons/md";

interface Props {
  id: string;
  userId: string;
}

const BookMark = ({ id, userId }: Props) => {
  const { data: animes } = useGetAnimes();
  const { data: watchlist } = useGetWatchList(userId);

  const isBookMarked = watchlist?.animes.find((x) => x == id);
  const { pending } = useFormStatus();

  const [BookMarked, bookMark] = useState<undefined | string | boolean>(
    isBookMarked
  );

  const toast = useToast();

  const targetData = animes?.find((x) => x?.id == id);

  return (
    <IconButton
      display={{ base: "none", md: "block" }}
      variant="outline"
      aria-label="bookmark"
      border={pending ? "none" : "1px"}
      borderColor={BookMarked ? "orange" : "white"}
      icon={
        pending ? (
          <Spinner thickness="1px" emptyColor="gray.200" color="orange.500" />
        ) : BookMarked ? (
          <MdBookmarkAdded color="orange" size="25" />
        ) : (
          <MdBookmarkAdd color="white" size="25" />
        )
      }
      onClick={async () => {
        if (BookMarked) {
          await deleteWatchList(userId, id);
          bookMark(false);
          toast({
            title: "Deleted From Watchlist",
            description: `${targetData?.title} deleted from watchlist`,
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        } else {
          await createWatchList(userId, id);
          bookMark(true);
          toast({
            title: "Added To Watchlist",
            description: `${targetData?.title} Added To watchlist`,
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        }
      }}
    />
  );
};

export default BookMark;
