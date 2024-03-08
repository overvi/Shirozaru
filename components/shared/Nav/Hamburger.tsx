"use client";

import IconButton from "@/customs/IconButton";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { IoBookmarks } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const Hamburger = () => {
  const naivgate = useRouter();
  return (
    <>
      <Menu>
        <IconButton
          aria-label="Hle"
          as={MenuButton}
          icon={<RxHamburgerMenu size="30" />}
        />
        <MenuList>
          <Button
            as={MenuItem}
            px={4}
            variant="unstyled"
            onClick={() => naivgate.push("/watchlist")}
            leftIcon={<IoBookmarks />}
          >
            BookMarks
          </Button>
        </MenuList>
      </Menu>
    </>
  );
};

export default Hamburger;
