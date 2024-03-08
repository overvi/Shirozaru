"use client";

import { Flex, SkeletonCircle } from "@chakra-ui/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ToggleColorMode = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <SkeletonCircle />;
  }
  return (
    <>
      <Flex
        display={["none", "block"]}
        cursor="pointer"
        align="center"
        justify="center"
        borderRadius="100%"
        className="size-9 "
        bg="gray.100"
        boxShadow="0px 0px 20px 1px #1a202c"
        _dark={{ bg: "#fff", boxShadow: "0px 0px 20px 1px #fbd38d" }}
        onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
      ></Flex>
    </>
  );
};

export default ToggleColorMode;
