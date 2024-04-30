"use client";

import { Link as L } from "@chakra-ui/next-js";
import { Button, ButtonProps } from "@chakra-ui/react";
import { ReactNode } from "react";
import { IoPlay } from "react-icons/io5";

interface Props {
  href: string;
  children: ReactNode;
  className?: string;
}

const Link = ({ href, children, className }: Props) => {
  return (
    <Button
      className={className}
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
