"use client";

import { Link as L } from "@chakra-ui/next-js";
import { Button, ButtonProps } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { IoPlay, IoWatch } from "react-icons/io5";

interface Props {
  href: string;
  children: ReactNode;
}

const Link = ({ href, children }: Props) => {
  return (
    <Button
      alignSelf={{ base: "center", md: "start" }}
      as={L}
      w="fit-content"
      px={8}
      variant="outline"
      fontWeight="300"
      colorScheme="yellow"
      leftIcon={<IoPlay />}
      href={href}
      prefetch
    >
      {children}
    </Button>
  );
};

export default Link;
