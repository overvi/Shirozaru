"use client";

import IconButton from "@/customs/IconButton";
import { useGetWatchList } from "@/hooks/useWatchList";
import { useRouter } from "next/navigation";
import { IoBookmarks } from "react-icons/io5";

const WatchList = ({ userId }: { userId: string }) => {
  const navigate = useRouter();
  const { data: watchlist } = useGetWatchList(userId);

  return (
    <IconButton
      display={["none", watchlist?.animes.length ? "block" : "none"]}
      aria-label="book-mark"
      onClick={() => navigate.push("/watchlist")}
    >
      <IoBookmarks size="25" />
    </IconButton>
  );
};

export default WatchList;
