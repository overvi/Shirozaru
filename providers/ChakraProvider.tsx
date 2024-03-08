"use client";

import React, { PropsWithChildren } from "react";
import { ChakraProvider as Chakra } from "@chakra-ui/react";
import theme from "@/theme/theme";

const ChakraProvider = ({ children }: PropsWithChildren) => {
  return <Chakra theme={theme}>{children}</Chakra>;
};

export default ChakraProvider;
